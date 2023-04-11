import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';
import { MathFunction, PopUpImages } from './marketplace-fuctions'

export const MarketPlaceTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  Nombre
                </TableCell>
                <TableCell>
                  Referencia
                </TableCell>
                <TableCell>
                  Precio
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((product) => {
                const isSelected = selected.includes(product.id);
                //ToDo variable para el precio

                return (
                  <TableRow
                    hover
                    key={product.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(product.id);
                          } else {
                            onDeselectOne?.(product.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >
                        <Typography variant="subtitle2">
                          <button class="openPopUp" onClick={PopUpImages}>{product.name}</button>
                        </Typography>
                      </Stack>
                      <div class="overlay">
                        <div class="popUp">
                          <a class="closePopUp"><button class="BtnExit">X</button></a>
                          <div class="informationProduct">
                            <h2>{product.name}</h2>
                            <img src={product.image}></img>
                            <p>{product.description}</p>
                            <div class="btnMath">
                              <button class="subtractPurchase" onClick={MathFunction}>-</button>
                              <p class="resultPurchase">0</p>
                              <button class="addPurchase" onClick={MathFunction}>+</button>
                            </div> 
                            <div>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {product.reference}
                    </TableCell>
                    <TableCell>
                      {product.price}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

MarketPlaceTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
