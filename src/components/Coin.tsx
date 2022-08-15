import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme,  styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

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
// onClick={handleExpandClick}
            // aria-expanded={expanded}
            // aria-label="show more"
      
        
        
          // <CardMedia
          //   component="img"
          //   alt="coin"
          //   height="140"
          //   image={image}
          //   />
const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap}) => {
  // const [expanded, setExpanded] = React.useState();

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
    return (
       <>
        <Card >
          <CardActionArea sx={{display:"flex", direction:"row", justifyContent:"center"}}>
            
            <CardContent  sx={{display:"flex", justifyContent:"space-between"}}>
              <img src={image} alt="coin" width="40px" height="40px"/>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography>
                {symbol}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              ${price.toLocaleString()}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
            
            
            
            
          
        
        
              </>
      
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