import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { MarketPlaceTable } from 'src/sections/marketplace/marketplace-table';
import { ProductSearch } from 'src/sections/marketplace/marketplace-search';
import { applyPagination } from 'src/utils/apply-pagination';
import { PopUpImages } from '../sections/marketplace/marketplace-fuctions'; 

const data = [
  {
    id: 'e86d5487afdee6b',
    image: '/assets/catalog/Kit de arrastre.jpg',
    reference: 'HK5201',
    code: '15e22',
    name: 'Kit de arrastre Scorpion',
    description: 'Kit de arrastre para DUKE 250 y 390 NG, DOMINAR 250 400 UG REVO SCORPION',
    price: '$ 127.800'
  },
  {
    id: 'a373dcc26a447f2',
    image: '/assets/catalog/Repsol Semi sintetico.jpg',
    reference: 'RS293',
    code: '22923',
    name: 'Repsol Moto Sport 4T 10W40 Semi Sintético',
    description: 'Es El Aceite Lubricante De Composición Semisintética Perfecto Para Motores De 4T.Proporciona Una Elevada Estabilidad Térmica Y Su Grado De Viscosidad Facilita El Arranque A Diferentes Temperaturas Ambiente.',
    price: '$ 42.300'
  },
  {
    id: '6acd8de4f428ed7',
    image: '/assets/catalog/Llanta Michelin 90-90-19.jpg',
    reference: 'MC0025',
    code: '8bcc8',
    name: 'Llanta Michelin 90-90-19 Sellomatic Anakee Street',
    description: 'Opción perfecta para aquellos conductores que buscan seguridad en carretera y calle a un precio atractivo. Con una composición de 80% para carretera y 20% para off-road',
    price: '$ 281.520'
  },
  {
    id: 'd2cf60db5b69026',
    image: '/assets/catalog/Llanta Michelin 100-90-17 TL.jpg',
    reference: 'MC0020',
    code: '2bff9',
    name: 'Llanta Michelin 100-90-17 TL Sellomatic Pilot Street',
    description: 'La elección perfecta para el uso diario. Ofrece una combinación de robustez, manejabilidad y confort, con un dibujo que proporciona un agarre superior tanto en seco como en mojado',
    price: '$ 248.580',
  },
  {
    id: 'd069b9510ccbaf9',
    image: '/assets/catalog/Rin Trasero Discover 150 St-150.jpg',
    reference: 'GP0017',
    code: '8735b',
    name: 'Rin Discover 150 St-150 F',
    description: 'Rin trasero para motos en la ciudad de Medellín',
    price: '$ 717.700'
  },
  {
    id: 'eaeb7f43177c9e1',
    image: '/assets/catalog/Rin Trasero Aspas Negro Gs125 Sukiparts.jpg',
    reference: 'TP3390',
    code: 'b1f94',
    name: 'Rin Aspas Negro Gs125 Sukiparts',
    description: 'Sukiparts :es una marca con más de 10 años en el mercado colombiano especializada en repuestos para motocicletas Suzuki.',
    price: '$ 639.000'
  },
  {
    id: '038771d8455721e',
    image: '/assets/catalog/Correa Transmision N-Max Scoot Parts.jpg',
    reference: 'GW0371',
    code: '0d069',
    name: 'Correa Transmision N-Max Scoot Parts',
    description: 'SCOOT PARTS es una marca de repuestos premium, diseñada para el mercado de las motos scooter en Colombia, enfocándose en las principales motos que en estos momentos revolucionan el mercado Yamaha, Kymco y Akt.',
    price: '$ 155.300'
  },
  {
    id: '2e020a3fd19fc62',
    image: '/assets/catalog/Correa Transmision Bws 125-125X Genui.jpg',
    reference: 'GW0125',
    code: 'e0488',
    name: 'Correa Transmision Bws 125-125X Genui',
    description: 'Este Repuesto es nuevo y con garantía de fabricante.',
    price: '$ 47.500'
  },
  {
    id: 'b9239a5909a6c1f',
    image: '/assets/catalog/Amortiguador Trasero Dorado Nitrox Apache Rtr 180 2V Revo.jpg',
    reference: 'TI0048',
    code: 'eb07f',
    name: 'Amortiguador Trasero Dorado Nitrox Apache Rtr 180 2V Revo',
    description: 'REVO es uno de los fabricantes de piezas de moto más económicos y, al mismo tiempo, uno de los más innovadores. Sus productos están diseñados para resolver los problemas del sector, utilizando la innovación y el desarrollo.',
    price: '$ 215.800'
  },
  {
    id: 'b9207841d7cf2bf',
    image: '/assets/catalog/Amortiguador Trasero Szr Sz Rr Revo.jpg',
    reference: 'TI0032',
    code: 'c7ace',
    name: 'Amortiguador Trasero Szr Sz Rr Revo',
    description: 'En comparación con otros amortiguadores, los amortiguadores de REVO están diseñados para soportar hasta 300 kilogramos de peso, lo que supone una mejor ergonomía y firmeza. ',
    price: '$ 96.600'
  },
  {
    id: '4e9a81b532d8b37',
    image: '/assets/catalog/Disco De Freno Del Pulsar 200Ns-As-Ns Bsiv Revo.jpg',
    reference: 'RD0039',
    code: '2e213',
    name: 'Disco De Freno Del Pulsar 200Ns-As-Ns Bsiv Revo',
    description: 'Disco de freno delantero REVO, fabricados en acero inoxidable. Sometidos a tratamientos térmicos y cuidadosos controles de calidad, con el fin de garantizar un eficiente frenado, durabilidad y alto desempeño en la motocicleta.',
    price: '$ 127.300'
  },
  {
    id: 'e24eeb1c1fbfa10',
    image: '/assets/catalog/Disco De Freno Del Apache Rtr 160-180-200 Revo.jpg',
    reference: 'RD0035',
    code: '32314',
    name: 'Disco De Freno Del Apache Rtr 160-180-200 Revo',
    description: 'Los Discos De Freno Revo Son Fabricados En Acero Inoxidable, Sometidos A Tratamientos Térmicos Y Cuidadosos Controles De Calidad, Con El Fin De Garantizar Un Eficiente Frenado, Durabilidad Y Alto Desempeño En La Motocicleta.',
    price: '$ 101.700'
  },
  {
    id: '5a2161b395bfc87',
    image: '/assets/catalog/Bateria Yuasa-Ytb9 Wc Pila Estorm.jpg',
    reference: 'YU0008',
    code: '0cafb',
    name: 'Bateria Yuasa-Ytb9 Wc Pila Estorm',
    description: 'Bateria Yuasa-Ytb9 Wc Pila Estorm',
    price: '$ 149.600'
  },
  {
    id: 'e20309d27c8bfaa',
    image: '/assets/catalog/Batería Gel 12N7-Bs Revo.jpg',
    reference: 'YB2087',
    code: '1eaee',
    name: 'Batería Gel 12N7-Bs Revo',
    description: 'Los terminales de cobre de las baterías de gel REVO, que contienen un electrolito gelificado sin ácido, proporcionan una mejor conductividad y una mayor duración que las baterías convencionales. Debido a su construcción y al material de gel.',
    price: '$ 154.000'
  },
  {
    id: '680a7311905ca5e',
    image: '/assets/catalog/Filtro Aceite Xr 250 Tornado-Xr 200-Xr 650-Klx 250-Cbr 250-Xre 300 Revo.jpg',
    reference: 'YF2310',
    code: 'f97c8',
    name: 'Filtro Aceite Xr 250 Tornado-Xr 200-Xr 650-Klx 250-Cbr 250-Xre 300 Revo',
    description: 'Este Repuesto es nuevo y con garantía de fabricante.',
    price: '$ 6.700'
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
      <Box>
      <button class="openPopUp" onClick={PopUpImages} >
          <SvgIcon fontSize="small">
            <ShoppingBagIcon />
          </SvgIcon>
          </button>
          <div className="overlay">
              <div className="popUp">
                <a className="closePopUp"><button class="BtnExit">X</button></a>
                <h1>Carrito de compras</h1>   
                <p>Aqui se encontraran todos los productos despues de seleccionar lo que se quiera</p>          
              </div>
          </div>
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
