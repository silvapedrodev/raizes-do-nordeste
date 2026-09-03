import { User } from "@/types/user";
import { invalidateCoupon } from "@/lib/mock-checkout/loyalty";

type CreateUserData = {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  birthDate: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const USERS_KEY = "mock_users";
const TOKEN_KEY = "mock_token";

export const getUsers = (): User[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const users = localStorage.getItem(USERS_KEY);

  if (!users) {
    return [];
  }

  return JSON.parse(users);
};

export const saveUsers = (users: User[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getUserByToken = (token: string | null): User | null => {
  if (!token) return null;

  const userId = token.split("_")[2];
  if (!userId) return null;

  const users = getUsers();
  return users.find(user => user.id === userId) ?? null;
};

export const findUserByIdentifier = (identifier: string): User | null => {
  const users = getUsers();

  if (identifier.includes("@")) {
    const email = identifier.trim().toLowerCase();

    return (
      users.find(
        user => user.email.toLowerCase() === email
      ) ?? null
    );
  }

  const cpf = identifier.replace(/\D/g, "");

  return (
    users.find(
      user => user.cpf?.replace(/\D/g, "") === cpf
    ) ?? null
  );
};

export const signin = (identifier: string, password: string) => {
  const user = findUserByIdentifier(identifier);

  if (!user) {
    return {
      error: "Usuário não encontrado",
      token: null,
    };
  }

  if (user.password !== password) {
    return {
      error: "Senha incorreta",
      token: null,
    };
  }

  const token = `mock_token_${user.id}_${crypto.randomUUID()}`;

  return {
    error: null,
    token,
  };
};


export const createMockUser = (data: CreateUserData): User => {
  const users = getUsers();
  const now = new Date().toISOString();

  const newUser = {
    id: crypto.randomUUID(),

    name: data.name,
    cpf: data.cpf,
    email: data.email,
    phone: data.phone,
    birthDate: data.birthDate,
    password: data.password,

    loyalty: null,

    privacy: {
      analyticsCookies: true,
      personalizedOffers: false,
    },

    legalConsent: {
      termsOfUse: data.terms,
      privacyPolicy: data.terms,
      acceptedAt: now,
    },

    createdAt: now,
    updatedAt: now,
  }

  localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]))

  return newUser;
}

export const userExistsByEmailOrCpf = (email: string, cpf: string): boolean => {
  const users = getUsers();

  return users.some(
    user =>
      user.email === email ||
      user.cpf === cpf
  );
};

export const getUserFirstName = (token: string): string | null => {
  const userId = token.split("_")[2];

  if (!userId) {
    return null;
  }

  const users = getUsers();

  const user = users.find(
    user => user.id === userId
  );

  if (!user) {
    return null;
  }

  return user.name.trim().split(/\s+/)[0];
};

export const updateUserPrivacy = (
  token: string,
  privacy: Partial<User["privacy"]>
): User | null => {
  const userId = token.split("_")[2];

  if (!userId) {
    return null;
  }

  const users = getUsers();

  const userIndex = users.findIndex(
    user => user.id === userId
  );

  if (userIndex === -1) {
    return null;
  }

  const updatedUser: User = {
    ...users[userIndex],
    privacy: {
      ...users[userIndex].privacy,
      ...privacy,
    },
    updatedAt: new Date().toISOString(),
  };

  users[userIndex] = updatedUser;

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );

  return updatedUser;
};

export const getUserLoyaltyConsent = (
  token: string
): {
  participating: boolean;
  personalizedOffers: boolean;
} | null => {
  const user = getUserByToken(token);

  if (!user) {
    return null;
  }

  return {
    participating: user.loyalty !== null,
    personalizedOffers: user.privacy.personalizedOffers,
  };
};

export const updateUserLoyaltyConsent = (
  token: string,
  consent: {
    participating?: boolean;
    personalizedOffers?: boolean;
  }
): User | null => {
  const userId = token.split("_")[2];

  if (!userId) {
    return null;
  }

  const users = getUsers();

  const userIndex = users.findIndex(
    user => user.id === userId
  );

  if (userIndex === -1) {
    return null;
  }

  const currentUser = users[userIndex];

  const updatedUser: User = {
    ...currentUser,

    loyalty:
      consent.participating === false
        ? null
        : consent.participating === true
          ? currentUser.loyalty ?? {
            points: 0,
            coupons: [],
          }
          : currentUser.loyalty,

    privacy: {
      ...currentUser.privacy,

      ...(consent.personalizedOffers !== undefined && {
        personalizedOffers: consent.personalizedOffers,
      }),
    },

    updatedAt: new Date().toISOString(),
  };

  users[userIndex] = updatedUser;

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );

  return updatedUser;
};

export const applyLoyaltyChanges = (
  token: string,
  changes: {
    pointsToAdd?: number;
    couponCodeToInvalidate?: string;
  }
): User | null => {
  const userId = token.split("_")[2];
  if (!userId) return null;

  const users = getUsers();
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) return null;

  const currentUser = users[userIndex];
  if (!currentUser.loyalty) return currentUser; // não participa, nada a fazer

  let updatedCoupons = currentUser.loyalty.coupons;
  if (changes.couponCodeToInvalidate) {
    updatedCoupons = invalidateCoupon(updatedCoupons, changes.couponCodeToInvalidate);
  }

  const updatedUser: User = {
    ...currentUser,
    loyalty: {
      points: currentUser.loyalty.points + (changes.pointsToAdd ?? 0),
      coupons: updatedCoupons,
    },
    updatedAt: new Date().toISOString(),
  };

  users[userIndex] = updatedUser;
  saveUsers(users);

  return updatedUser;
};

export const setAuthToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeAuthToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
