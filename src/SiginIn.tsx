import React, { Fragment, useState } from "react";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase/Firebase";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const getUser = await signInWithEmailAndPassword(auth, email, password);
      console.log(getUser);
      navigate("/home");
      // navigate("/home", { state: { user: getUser } });
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
                onClick={handleSignIn}
              >
                ログイン
              </Button>
            </Box>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};
