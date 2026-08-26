export type UnitStatus = "active" | "inactive";

export type Unit = {
  id: string;
  slug: string;
  name: string;

  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };

  openingHours: OpeningHours;

  availableFulfillmentTypes: FulfillmentType[];

  status: UnitStatus;
}

export type OpeningHours = {
  monday: {
    open: string;
    close: string;
  };
  tuesday: {
    open: string;
    close: string;
  };
  wednesday: {
    open: string;
    close: string;
  };
  thursday: {
    open: string;
    close: string;
  };
  friday: {
    open: string;
    close: string;
  };
  saturday: {
    open: string;
    close: string;
  };
  sunday: {
    open: string;
    close: string;
  };
};

export type FulfillmentType = "pickup" | "dine-in";