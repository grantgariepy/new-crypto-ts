import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { Chart } from './Chart';
import PropTypes, { InferProps } from "prop-types";


export const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap}:
  InferProps<typeof Coin.propTypes>
  ) => {
    const [expanded, setExpanded] = React.useState();
    
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
      <>
        <Card 
          onClick={handleExpandClick}
          sx= {{ width:1,  display: 'flex', mx:"auto", mb:1, mt: 1}}
          >
          <CardActionArea sx={{display:"flex", direction:"row", justifyContent:"space-between" }}>
            <CardContent  sx={{display:"flex", }} >
              <Typography mr={3}>
                <img src={image} alt="coin" width="40px" height="40px"/>
              </Typography>
              <Typography  variant="h5" component="div" mr={1}>
                {name}
              </Typography>
              <Typography  variant="caption" component="div">
                {symbol}
              </Typography>
            </CardContent>
            <CardContent  sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography variant="body2" color="text.secondary">
              ${price.toLocaleString()}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Chart />
          </CardContent>
        </Collapse>
      </>
    );
  }
  Coin.propTypes = {
    Coin: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    volume: PropTypes.number.isRequired,
    priceChange: PropTypes.number.isRequired,
    marketcap: PropTypes.number.isRequired,
    expanded: PropTypes.bool.isRequired,
  };
  export default Coin
  