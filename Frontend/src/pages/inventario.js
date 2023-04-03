import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <title>
          Inventario |  Net SysInformation
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} md={12} lg={12}>
              <OverviewLatestOrders
                orders={[
                  {
                    id: "00001",
                    ref: "DEV0001",
                    costo: "59.990.000" ,
                    customer: {
                      name: "Kawasaki Z1000",
                    },
                    createdAt: 1554670800000,
                    status: "En Stock",
                    entradas: 50,
                    salidas: 20,
                    total:30
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;
