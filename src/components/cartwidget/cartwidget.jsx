import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CartWidget() {
    return (
        <IconButton aria-label="cart">
            <Badge badgeContent={3} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
}
