export interface TeamMember {
    id: string;
    name: string;
    title: string;
    image: string;
  }
  
  export interface Plan {
    id: number;
    title: string;
    description: string;
    features: string[];
    isPopular: boolean;
  }
  
  export interface Review {
    id: string;
    name: string;
    review: string;
  }
  
  
