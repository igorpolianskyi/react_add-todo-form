import classNames from 'classnames';
import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={classNames(`mailto:${user.email}`)}>
    {user.name}
  </a>
);
