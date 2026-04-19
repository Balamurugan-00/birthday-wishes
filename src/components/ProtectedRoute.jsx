import LockedPage from './LockedPage';

export default function ProtectedRoute({ isAllowed, children }) {
  if (!isAllowed) {
    return <LockedPage />;
  }

  return children;
}
