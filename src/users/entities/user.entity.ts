import { User } from '@prisma/client';

export class UserEntity implements User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt: Date;
}
