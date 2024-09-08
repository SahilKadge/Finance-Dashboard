import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme, Button } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import { useMonth } from "../../context/MonthContext.jsx";

type Props = {};

const Navbar = (props: Props) => {
  const { isMonthly, toggleIsMonthly, selectedMonth, setSelectedMonth } = useMonth(); // Access context values
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    console.log(event.target.value);
  };
  
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          DashBoard
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <Button
        onClick={toggleIsMonthly}
        sx={{
          backgroundColor: palette.grey[900],
          color: palette.grey[100],
          px: 2,
          py: 1,
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
          '&:hover': {
            backgroundColor: palette.grey[800],
            boxShadow: "7px 7px 12px rgba(0, 0, 0, 0.7)",
          }
        }}
      >
        Switch to {isMonthly ? 'Daily' : 'Monthly'} Data
      </Button>

      {!isMonthly && (
        <Box
          component="select"
          value={selectedMonth}
          onChange={handleMonthChange}
          sx={{
            backgroundColor: palette.grey[900],
            color: palette.grey[100],
            border: `1px solid ${palette.grey[600]}`,
            padding: '8px 12px',
            borderRadius: '4px',
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            '&:hover': {
              backgroundColor: palette.grey[800],
              boxShadow: "7px 7px 12px rgba(0, 0, 0, 0.7)",
            },
            '& option': {
              backgroundColor: palette.grey[900],
              color: palette.grey[100],
            }
          }}
        >
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </Box>
      )}

      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
