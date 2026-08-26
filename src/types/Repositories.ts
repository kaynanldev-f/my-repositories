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
  issue: {
    id: string;
    user: string;
    label: string;
  };
}

export interface IssuesType {
  id: string;
  title: string;
  user: {
    avatar_url: string;
    login: string;
  };
  labels: [
    {
      id: string;
      name: string;
    },
  ];
  html_url: string;
}
