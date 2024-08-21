import { Fragment } from "react/jsx-runtime";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const navigate = useNavigate();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(setEmail(e.currentTarget.value));
    setEmail(e.currentTarget.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            <Grid item md={4}>
              ログイン
            </Grid>
            <Box component={"form"}>
              <TextField
                style={{ margin: "0.5rem", marginBottom: "0.5rem" }}
                name="email"
                label="E-mail"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChangeEmail(e);
                }}
              />
              <TextField
                style={{ margin: "0.5rem", marginBottom: "0.5rem" }}
                name="password"
                label="Password"
                fullWidth
                variant="outlined"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChangePassword(e);
                }}
              />
              <Button
                fullWidth
                style={{ margin: "0.5rem", marginBottom: "0.5rem" }}
              >
                新規登録
              </Button>
            </Box>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};
