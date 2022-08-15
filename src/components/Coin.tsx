import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Chart } from './Chart';


interface Card extends Card{
  expand: boolean;
}
// const ExpandMore = styled((props: ExpandMoreProps) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }));
const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap}) => {
  const [expanded, setExpanded] = React.useState();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
      <Card 
            
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
      >
        
        <CardActionArea >
          <CardContent>
          <CardMedia
            component="img"
            alt="coin"
            height="140"
            image={image}
            />
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {symbol}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${price.toLocaleString()}
            </Typography>
            {priceChange < 0 ? (
              <Typography variant="body2" color="red">
                {priceChange.toFixed()}%
            </Typography>
            ) : (
              <Typography variant="body2" color="green">
                {priceChange.toFixed()}%
            </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              <b> Volume:</b> ${volume.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b> Market Cap:</b> ${marketcap.toLocaleString()}
            </Typography>
            {/* <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <p>hi</p>
            </ExpandMore> */}
          </CardContent>
        </CardActionArea>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            
                <Chart />
              
          </CardContent>
        </Collapse>
      </Card>
        // <div className="coin-container dark:bg-gray-900">
        //     <div className="coin-row">
        //         <div className="coin">
        //             <img src={image} alt="crypto"/>
        //             <p>{name}</p>
        //             <p className="coin-symbol">{symbol}</p>
        //         </div>
        //         <div className="coin-data">
        //           <p className="coin-price">${price.toLocaleString()}</p>
        //           {priceChange < 0 ? (
        //             <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
        //           ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
                
        //         }
        //         <p className="coin-volume">Volume: ${volume.toLocaleString()}</p>
        //         <p className="coin-marketcap">Market Cap: ${marketcap.toLocaleString()}</p>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Coin