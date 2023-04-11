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


const now = new Date();

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
    image: '/assets/avatars/avatar-carson-darrin.png',
    reference: 'RS293',
    name: 'Lubricante Repsol Moto Sport SemiSintetico',
    description: 'Kit de arrastre para DUKE 250 y 390 NG, DOMINAR 250 400 UG REVO SCORPION',
    price: '$ 42.300'
  },
  {
    id: '5e887ac47eed25309be10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    reference: 'RS293',
    name: 'Lubricante Repsol Moto Sport SemiSintetico',
    price: '$ 42.300'
  },
  {
    id: '5e887ac47eed25391be10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    reference: 'RS293',
    name: 'Lubricante Repsol Moto Sport SemiSintetico',
    price: '$ 42.300'
  },
  {
    id: '5e887ac7eed253091be10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    reference: 'RS293',
    name: 'Lubricante Repsol Moto Sport SemiSintetico',
    price: '$ 42.300'
  },
  {
    id: '5e887ac47eed253091be10b',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    reference: 'RS293',
    name: 'Lubricante Repsol Moto Sport SemiSintetico',
    price: '$ 42.300'
  },
  {
    id: '5e887ac47eed25391be10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    reference: 'RS293',
    name: 'Lubricante Repsol Moto Sport SemiSintetico',
    price: '$ 42.300'
  },
  {
    id: '5e887ac47eed25091be10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    reference: 'RS293',
    name: 'Lubricante Repsol Moto Sport SemiSintetico',
    price: '$ 42.300'
  },
  {
    id: '5e887a47eed253091be10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    reference: 'RS293',
    name: 'Lubricante Repsol Moto Sport SemiSintetico',
    price: '$ 42.300'
  },
  {
    id: '5e887ac47d253091be10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    reference: 'RS293',
    name: 'Lubricante Repsol Moto Sport SemiSintetico',
    price: '$ 42.300'
  },
  {
    id: '5e887ac47eed2530be10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    reference: 'RS293',
    name: 'Lubricante Repsol Moto Sport SemiSintetico',
    price: '$ 42.300'
  },
  {
    id: '5e7ac47eed253091be10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    reference: 'RS293',
    name: 'Lubricante Repsol Moto Sport SemiSintetico',
    price: '$ 42.300'
  },
  {
    id: '5e887ac47eed2530e10cb',
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    reference: 'RS293',
    name: 'Lubricante Repsol Moto Sport SemiSintetico',
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
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
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
