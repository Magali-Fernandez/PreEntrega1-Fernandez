import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CartWidget from "../cartWidget/CartWidget";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

function Navbar() {
    const [anchorElCategorias, setAnchorElCategorias] = useState(null);
    const categorias = ["Living", "Dormitorio", "Oficina"];

    return (
        <AppBar position="fixed" sx={{ width: "100%" }}>
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        px: 2,
                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monaco",
                            fontWeight: 300,
                            letterSpacing: "0.2rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Hogaria
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                            gap: 10,
                        }}
                    >
                        <Button
                            sx={{ my: 2, color: "white", display: "block" }}
                            onClick={(event) =>
                                setAnchorElCategorias(event.currentTarget)
                            }
                        >
                            Categorías
                        </Button>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElCategorias}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElCategorias)}
                            onClose={() => setAnchorElCategorias(null)}
                        >
                            {categorias.map((categoria) => (
                                <MenuItem
                                    key={categoria}
                                    onClick={() => setAnchorElCategorias(null)}
                                >
                                    <Typography sx={{ textAlign: "center" }}>
                                        {categoria}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <CartWidget />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
