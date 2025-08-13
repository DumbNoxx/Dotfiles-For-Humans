export interface ApiExp {
  background: string;
  expertise: string[];
  approach: string;
}

export interface Exp {
  background: string;
  expertise: string[];
  approach: string
}

export const ExpEmpty: Exp = {
  background: "",
  expertise: [],
  approach: "",
}
