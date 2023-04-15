export const useMockedUser = () => {
  const { user } = useAuth();
  return {
    id: user?.id,
    avatar: '/assets/avatars/avatar-anika-visser.png',
    name: user?.name,
    email: user?.username,
    rol: user?.rol
  };
};
