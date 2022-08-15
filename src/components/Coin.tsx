import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme,  styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
       <Box sx={{
          flexGrow: 2,
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          mb: 3,
        }}>
          <Grid container spacing={1} columns={12}  mt={1}>
            <Grid 
              item xs={4}
              display="flex"
              direction="row" 
              alignItems="center"
              justifyContent="start">

                <Typography ml={3} mr={2}>
                  <img src={image} width={40} height={40}/>
                </Typography>
                <Typography 
                  textAlign="left"
                  variant="h5" 
                  component="div">
                    {name}
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  component="div"
                  textTransform="uppercase"
                  ml={1}>
                    {symbol}
                </Typography>
              </Grid>   
              
             <Grid 
          item xs={8} 
          display="flex"
          direction="row" 
          alignItems="center"
          justifyContent="space-between">
                  <Typography 
                    variant="body2" 
                    color="text.secondary">
                      ${price.toLocaleString()}
                  </Typography>
                    {priceChange < 0 ? (
                    <Typography 
                    variant="body2" 
                    color="red">
                        {priceChange.toFixed()}%
                  </Typography>
                    ) : (
                      <Typography 
                      variant="body2"
                      color="green">
                        {priceChange.toFixed()}%
                  </Typography>
                  )}
                  <Typography 
                    variant="body2"
                    color="text.secondary">
                    <b> Volume:</b> ${volume.toLocaleString()}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary">
                    <b> Market Cap:</b> ${marketcap.toLocaleString()}
                  </Typography>
            
                  </Grid>
          </Grid>
        </Box>
            {/* <Grid container spacing={1} justifyContent="center" >
              {[darkTheme].map((theme, index) => (
                <Grid item xs={12} key={index} justifyContent="center">
                  <ThemeProvider theme={theme} >
                    <Box
                      sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 1,
                        display: 'row',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 1,
                      }}
                    >
                      {[6].map((elevation) => (
                        <Item key={elevation} elevation={elevation} >
                          <Typography gutterBottom variant="h5" component="div" >
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
                        </Item>
                      ))}
                    </Box>
                  </ThemeProvider>
                </Grid>
              ))}
            </Grid> */}
            
            
            
            {/* <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              >
              <p>hi</p>
            </ExpandMore> */}
          
        
        {/* <Chart /> */}
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