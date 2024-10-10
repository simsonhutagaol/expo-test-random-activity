export interface Data {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string | null;
  key: string;
  accessibility: string;
  availability: number;
  duration: string;
  kidFriendly: boolean;
}
export interface ActivityDisplayProps {
  data: Data | null;
  onSave: () => void;
  saving: boolean;
}

export interface SavedActivityListProps {
  savedData: Data[];
  onDelete: (item: Data) => void;
}
