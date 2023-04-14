import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { MarketPlaceTable } from 'src/sections/marketplace/marketplace-table';
import { ProductSearch } from 'src/sections/marketplace/marketplace-search';
import { applyPagination } from 'src/utils/apply-pagination';

const data = [
  {
    id: 'adfassa8f4d89sa',
    image: '/assets/avatars/Kit de arrastre.jpg',
    reference: 'HK5201',
    code: '428HX132',
    name: 'Kit de arrastre Scorpion',
    description: 'Kit de arrastre para DUKE 250 y 390 NG, DOMINAR 250 400 UG REVO SCORPION',
    price: '$ 127.800'
  },
  {
    id: '5e887ac47eed253091be10cb',
    image: '/assets/avatars/Repsol Semi sintetico.jpg',
    reference: 'RS293',
    code: '231AK4705',
    name: 'Repsol Moto Sport 4T 10W40 Semi Sintético',
    description: 'Es El Aceite Lubricante De Composición Semisintética Perfecto Para Motores De 4T.Proporciona Una Elevada Estabilidad Térmica Y Su Grado De Viscosidad Facilita El Arranque A Diferentes Temperaturas Ambiente.',
    price: '$ 42.300'
  },
];

const useProduct = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useProductids = (product) => {
  return useMemo(
    () => {
      return product.map((product) => product.id);
    },
    [product]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const products = useProduct(page, rowsPerPage);
  const productIds = useProductids(products);
  const productsSelection = useSelection(productIds);

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
          Tienda |  Net SysInformation
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
                  Tienda
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <ProductSearch />
            <MarketPlaceTable
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
