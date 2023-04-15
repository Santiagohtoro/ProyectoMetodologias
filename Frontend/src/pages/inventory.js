import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { InventoryTable } from 'src/sections/inventory/inventory-table';
import { InventorySearch } from 'src/sections/inventory/inventory-search';
import { applyPagination } from 'src/utils/apply-pagination';
import ModalAdd from 'src/layouts/dashboard/inventory-add';





const now = new Date();

const data = [
  {
    id: "00001",
    ref: "DEV0001",
    avatar:'/assets/avatars/avatar-fran-perez.png',
    costo: "59.990.000" ,
    name: "Kawasaki Z1000",
    createdAt: 1554670800000,
    status: "En Stock",
    entradas: 50,
    salidas: 20,
    total:30,
    puntoDeVenta:{
      nombre:"Motor Sys",
      ciudad:"Medellin"
    }
  }
];

const useProducts = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useProductsIds = (products) => {
  return useMemo(
    () => {
      return products.map((product) => product.id);
    },
    [products]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const products = useProducts(page, rowsPerPage);
  const productsIds = useProductsIds(products);
  const productsSelection = useSelection(productsIds);


  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

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
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Inventario
                </Typography>
                
              </Stack>
              <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
              <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
                Delete
              </Button>
                <ModalAdd/>
              </Stack>
            </Stack>
            <InventorySearch/>
            <InventoryTable
              count={data.length}
              items={products}
              onDeselectAll={productsSelection.handleDeselectAll}
              onDeselectOne={productsSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={productsSelection.handleSelectAll}
              onSelectOne={productsSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={productsSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
