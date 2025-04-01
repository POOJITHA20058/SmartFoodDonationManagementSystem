import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : "Invalid email";
    tempErrors.password = formData.password.length >= 6 ? "" : "Password must be at least 6 characters long";
    tempErrors.role = formData.role ? "" : "Please select a role";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Signup Successful! Role: ${formData.role}`);
      navigate("/login"); // Redirect to login after signup
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      {/* Main Content */}
      <Container component="main" maxWidth="sm" sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "400px",
              padding: "20px",
              boxShadow: 3,
              borderRadius: "10px",
              bgcolor: "white",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Signup
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                margin="normal"
                required
              />
              {/* Role Selection */}
              <FormControl fullWidth margin="normal" error={!!errors.role}>
                <InputLabel>Role</InputLabel>
                <Select name="role" value={formData.role} onChange={handleChange}>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="agent">Agent</MenuItem>
                  <MenuItem value="donor">Donor</MenuItem>
                </Select>
                {errors.role && (
                  <Typography variant="caption" color="error">
                    {errors.role}
                  </Typography>
                )}
              </FormControl>

              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Signup
              </Button>
            </form>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ width: "100%", mt: "auto" }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default SignupForm;
