import React, { useState, useCallback } from "react";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { SvgIcon, Button, Modal, Box,   Card, CardActions, CardContent, CardHeader, Divider, TextField, Unstable_Grid2 as Grid} from "@mui/material";



const code = [
  {
    value: 'DEV0001',
    label: 'DEV0001'
  }
];



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalAdd() {
    const [values, setValues] = useState({
        firstName: 'Anika',
        lastName: 'Visser',
        email: 'demo@devias.io',
        phone: '',
        state: 'los-angeles',
        country: 'USA'
      });
    
      const handleChange = useCallback(
        (event) => {
          setValues((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
          }));
        },
        []
      );
    
      const handleSubmit = useCallback(
        (event) => {
          event.preventDefault();
        },
        []
      );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        startIcon={
          <SvgIcon fontSize="small">
            <PlusIcon />
          </SvgIcon>
        }
        variant="contained"
      >
        Nuevo Producto
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <form onSubmit={handleSubmit}>
          <Card sx={{ ...style }} >
            <CardHeader subheader="La informacion puede ser modificada" title="Registro de Producto" />
            <CardContent sx={{ pt: 0 }}>
              <Box >
                <Grid container spacing={3}>
                <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Codigo de producto"
                      name="puntoDelProducto"
                      onChange={handleChange}
                      required
                      select
                      SelectProps={{ native: true }}
                    >
                      {code.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
           
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Nombre del Producto"
                      name="puntoDelProducto"
                      onChange={handleChange}
                      required

                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Nombre del punto de venta"
                      name="puntoDeVenta"
                      onChange={handleChange}
                      required

                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Ciudad"
                      name="ciuda"
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Valor por Unidad"
                      name="valorPorUnidad"
                      onChange={handleChange}
                      type="number"
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Entradas"
                      name="Entradas"
                      onChange={handleChange}
                      type="number"
                      required
                    />
                  </Grid>
                  
                </Grid>
              </Box>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button variant="contained">Registrar Producto</Button>
            </CardActions>
          </Card>
        </form>
      </Modal>
    </>
  );
}
