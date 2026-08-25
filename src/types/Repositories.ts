export interface RepositoryType {
  id?: string;
  name: string;
  full_name?: string;
  description?: string;
  html_url?: string;
  owner?: {
    avatar_url: string;
  };
}

export interface RepositoryDetailsType {
  name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
}
