import { Fragment } from "react/jsx-runtime";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase/Firebase";
import { FirebaseError } from "firebase/app";

export const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const signUp = async () => {
    try {
      console.log(auth.currentUser);
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/home");
        }
      );
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    }
  };

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
              サインイン
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
                onClick={signUp}
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
