import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  return (
    <div>
      <h1>ログイン成功</h1>
      {location.state ? (
        <p>{location.state.user.email} さん、こんにちは</p>
      ) : null}
    </div>
  );
};
