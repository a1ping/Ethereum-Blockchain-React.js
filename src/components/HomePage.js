import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, styled } from "@material-ui/core/styles";
import { 
    Container,
    Card, 
    CardMedia, 
    CardContent, 
    Avatar,
    Typography,
    Grid,
    Box,
    Button,
    AppBar,
    Toolbar,
    
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import {pageActions} from '../actions/pageInfo.action';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        {/* <Link color="inherit" href="https://react.school">
          React School
        </Link>{" "} */}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    paddingLeft:'5%',
    paddingRight:'5%',
  });
  
const useStyles=makeStyles((theme)=>({
    root:{
        flexGrow: 1,
    },
    home:{
        backgroundColor:"#fff",
    },
    drawerHeader:{
        display: 'flex',
        alignItems: 'center',
        padding: '3%',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
        backgroundColor:"#071722",
        width:"100%",
    },
    darkBackground:{
        backgroundColor:"#071722",
    },
    summaryTitle:{
        color:"#fff",
        paddingLeft:'5%',
        paddingRight:'5%',
    },
    summaryContent:{
        color:"#fff",
        paddingLeft:'5%',
        paddingRight:'5%',
    },
    createButton:{
        backgroundColor:"#00aa00",
        color:"#fff",
        '&:hover': {
            backgroundColor: '#007700',
        },
        margin:theme.spacing(1,5,2,5),
    },
    cardPane:{
      padding:'5%',
    },
    footer: {
      padding: '5%',
    },
    flowText:{
        fontSize:24,
        backgroundColor:"#eee",
        padding:'5%',

    },
    cardGrid: {
        padding:'5%',
    },
    card: {
      display: "flex",
      flexDirection: "column",
     
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
      
    },
    cardContent: {
      flexGrow: 1,
    },
    avatar:{
        backgroundColor:blue[500],
        width:"64px",
        height:"64px",
    },
    avatarContainer:{
        // marginLeft:"10%",
        // marginTop:"0.5%", 
        // marginRight:"1vw"
    },
    quoteBox:{
        background:"#d0e0b0",
        borderRadius:"1rem",
        marginBottom:"-0.1em",
        position:"relative",
        padding:"1.2em",
        margin:theme.spacing(5,5,3,5),
    },
    quoteTail:{
        content:" ",
        width:0,
        height:0,
        top:"100%",
        left:"33px",
        borderStyle:"solid",
        borderTop:"12px",
        borderTopColor:'#d0e0b0',
        borderLeft:"12px",
        borderLeftColor:'transparent',
        borderRight:"12px",
        borderRightColor:"transparent",
        borderBottom:"0px",
        borderBottomColor:"trasnparent",
        margin:theme.spacing(0,0,0,0),
    },
    image: {
      backgroundImage: "url(image/guy-holding-ipad.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",    
      width: "100%",
    //   color:"#fff",
     
    },
    optionTitle:{
        margin:theme.spacing(1,2,1,2),
    },
    optionContent:{
        margin:theme.spacing(1,2,1,2),
    },
    dashboardImg:{
        position: 'relative',
        width: 'auto',
        /* height: 100%, */
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
}));

const cards=[
    {
        title:"Secure Voting",
        description:'Each voter has a unique "Voter ID" and "Voter Key" and can only vote once.',
        img:"guy-holding-ipad.jpg"
    },
    {
        title:"Mobile Ready",
        description:'Elections are optimized for desktop and mobile devices. Voters can vote from a web browser or our iOS & Android apps.',
        img:"guy-holding-ipad.jpg"
    },
    {
        title:"Custom Design",
        description:`Personalize your election with your organization's logo and colors. No HTML/CSS knowledge necessary.`,
        img:"guy-holding-ipad.jpg"
    },
    {
        title:"256-Bit Encryption",
        description:`All elections have SSL (https://) grade security with 256bit encryption that keeps your election and ballots secure.`,
        img:"guy-holding-ipad.jpg"
    },
    {
        title:"Email Ballots",
        description:`Provide an optional email address for your voters and we'll notify them when your election launches.`,
        img:"guy-holding-ipad.jpg"
    },
    {
        title:"Import Ballot & Voters",
        description:`Save time by importing your voters and ballot from an excel spreadsheet or CSV file.`,
        img:"guy-holding-ipad.jpg"
    },
    {
        title:"Accessibility",
        description:`The voting application targets Section 508 and WCAG 2.0 AA compliance.`,
        img:"guy-holding-ipad.jpg"
    },
    {
        title:"Results Tabulation",
        description:`Election results are automatically calculated and presented with beautiful charts.`,
        img:"guy-holding-ipad.jpg"
    },
    {
        title:"Amazing Support",
        description:`Have a question? Need help? Our support team averages a response time of 8 minutes during business hours.`,
        img:"guy-holding-ipad.jpg"
    }
];

function HomePage(){
    
    const classes=useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(pageActions.setPageName('home'));
    })

    return(
        <>
            <React.Fragment>
                <Grid container component="main" className={classes.root}>
                    <Grid className={classes.drawerHeader}/>
                    <Grid container justifyContent="center" className={classes.darkBackground}>
                        
                        <Grid container justifyContent="center" item xs={12} sm={8} md={8} lg={8} alignItems="center">
                            <Grid container justifyContent="center" alignItems="center">
                                <Grid container justifyContent="center" item md={12} >
                                    <Typography component="h3" variant="h3" className={classes.summaryTitle}style={{paddingTop:'20px'}}>
                                        Secure, Cloud-based Elections
                                    </Typography>
                                </Grid>
                                <Grid container justifyContent="center" item md={12}>
                                    <Typography component="h3" variant="h5" className={classes.summaryContent}>
                                        Create an election for your school or organization in seconds. Your voters can vote from any location on any device.
                                    </Typography>
                                </Grid>
                                <Grid container justifyContent="center" item md={12}>
                                    <Button className={classes.createButton} style={{fontSize:24}}>
                                        Create a Free Election
                                    </Button>
                                </Grid>
                                <Grid container justifyContent="center" item md={12}>
                                     <Typography component="h6" variant="h6" className={classes.summaryContent}>
                                        * Elections with up to 20 voters are free. View Pricing
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item  xs={12} sm={4} md={4} lg={4} justifyContent="center" >
                            <Img src="image/phone.png"/>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Typography className={classes.flowText}>
                        "All of our voters loved how easy and professional the site is. As the Administrator, 
                        I found it very easy to use and setup. Great application!"
                        Kevin Struck
                        </Typography>
                    </Grid>
                    <Grid container justifyContent="center" >
                        <Grid className={classes.cardPane}>
                            <Typography component="h3" variant="h4" >
                            Your elections. Any device. Any location.
                            </Typography>
                        </Grid>
                        <Grid container style={{width:"90%"}}>
                            <Grid container className={classes.cardGrid}>
                                <Grid container spacing={4}>
                                    {cards.map((card,index) => (
                                    <Grid container item key={index} xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image={`image/${card.img}`}
                                                title="Image title"
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                {card.title}
                                                </Typography>
                                                <Typography>{card.description}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid> 
                    <Grid container item justifyContent="center"  style={{backgroundColor:'#fff'}}>            
                        <Typography variant="h4" style={{paddingTop:'5%', paddingBottom:'2%'}}>
                            Building an election is easy
                        </Typography>
                        <Typography variant="h6" style={{marginLeft:"10%", marginRight:"10%"}}>
                            You're always in control with Election Runner. 
                            It's easy to build and customize an election.
                        </Typography>
                    </Grid>
                    <Grid container justifyContent="center" style={{ paddingTop:"1vw", paddingBottom:"3vw",backgroundColor:'#fff'}}>
                        <Grid container justifyContent="center" item md={8}> 
                            
                            <Grid container style={{paddingTop:'3%', paddingLeft:'5%', paddingRight:'5%'}}>
                                <Grid container justifyContent="center" alignItems="center" item sm={1} md={1} className={classes.avatarContainer}>
                                    <Avatar alt="Remy Sharp" className={classes.avatar}>
                                        B
                                    </Avatar>
                                </Grid>
                                <Grid item sm={11} md={11}>
                                    <Grid container justifyContent="center">
                                        <Typography variant="h5" className={classes.optionTitle}>Create the Ballot</Typography>
                                    </Grid>
                                    <Grid container justifyContent="center">
                                        <Typography variant="h6" className={classes.optionContent}>
                                            Add questions (i.e. positions) to your ballot and add options (candidates, measures, write-in fields, etc.) to your questions. Add a photo and/or short bio.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid> 
                            <Grid container style={{paddingTop:'3%', paddingLeft:'5%', paddingRight:'5%'}}>
                                <Grid container justifyContent="center" alignItems="center"  item sm={1} md={1} className={classes.avatarContainer}>
                                    <Avatar alt="Remy Sharp" className={classes.avatar}>
                                        V
                                    </Avatar>
                                </Grid>
                                <Grid container item sm={11} md={11}>
                                    <Grid container justifyContent="center">
                                        <Typography variant="h5" className={classes.optionTitle}>
                                            Add Voters
                                        </Typography>
                                    </Grid>
                                    <Grid container justifyContent="center" >
                                        <Typography variant="h6" className={classes.optionContent}>
                                        You control who is eligible to vote in your elections. Add voters one-by-one, or import them from a spreadsheet.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>               
                             <Grid container container style={{paddingTop:'3%', paddingLeft:'5%', paddingRight:'5%'}}>
                                <Grid container justifyContent="center" alignItems="center" item sm={1} md={1} className={classes.avatarContainer}>
                                    <Avatar alt="Remy Sharp" className={classes.avatar}>
                                        E
                                    </Avatar>
                                </Grid>
                                <Grid container item sm={11} md={11}>
                                    <Grid container justifyContent="center">
                                        <Typography variant="h5" className={classes.optionTitle}>
                                        Launch the Election
                                        </Typography>
                                    </Grid>
                                    <Grid container justifyContent="center">
                                        <Typography variant="h6" className={classes.optionContent}>
                                        When you're done customizing the election, you can schedule a start/end date or immediately launch it.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>               
                            <Grid container container style={{paddingTop:'3%', paddingLeft:'5%', paddingRight:'5%'}}>
                                <Grid container justifyContent="center" alignItems="center" item sm={1} md={1} className={classes.avatarContainer}>
                                    <Avatar alt="Remy Sharp" className={classes.avatar}>
                                        R
                                    </Avatar>
                                </Grid>
                                <Grid container item sm={11} md={11}>
                                    <Grid container justifyContent  ="center">
                                        <Typography variant="h5" className={classes.optionTitle}>
                                            Monitor Results
                                        </Typography>
                                    </Grid>
                                    <Grid container justifyContent="center">
                                        <Typography variant="h6" className={classes.optionContent}>
                                        Watch the results of your election in real-time. At the end of the election you have the option to publish and share the results with your voters.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Button className={classes.createButton} style={{fontSize:18, marginTop:"2vw"}}>
                                        Create Your First Election
                                </Button>
                            </Grid>                              
                        </Grid>
                        <Grid container justifyContent="center" alignItems="center" item md={4} className={classes.dashboardImg}>
                            <img src="image/ipad-dashboard.jpg" style={{padding:'5%'}}/>
                        </Grid>                       
                    </Grid>
                    <Grid container >
                        <Grid container justifyContent="center">
                            <Typography variant="h4" style={{paddingTop:'3%'}}>
                                What customers are saying
                            </Typography>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Typography variant="h6">
                                Don't just take our word for it
                            </Typography>
                        </Grid>
                    </Grid> 
                    <Grid container justifyContent="center">
                        <Grid className={classes.quoteBox}>
                            <p>Election Runner provides a clean, attractive and easy-to-use voter interface that runs well on all Internet-enabled devices that we&#039;ve tested. Their support system is unparalleled for the speedy, comprehensive and personal manner in which it is delivered. With a few test elections under our belt, we were totally sold.</p>
                        </Grid>
                        <Grid className={classes.quoteTail}>
                        </Grid>
                        <Grid style={{fontSize:18,paddingLeft:'5%', paddingRight:'5%'}} container justifyContent="center">
                            <b>Michael L.,</b> University of Florida
                        </Grid>
                    </Grid>
                    <Grid container justifyContent ="center">
                        
                        <Grid item md={6}  container justifyContent="center">
                            <Grid  container justifyContent="center">
                                <Grid className={classes.quoteBox}>
                                    <p>I used this app for a union election for a mid sized law office with a very difficult to 
                                        please group of people. I found the app easy to use. The support team was excellent and 
                                        prompt. Would highly recommend as a low cost and simple way to hold an election</p>
                                </Grid>
                                <Grid className={classes.quoteTail}>
                                </Grid>
                            </Grid>
                            <Grid style={{marginTop:"1vw", fontSize:18,paddingLeft:'5%', paddingRight:'5%'}} >
                                <b>Michelle M.,</b> Legal aid buffalo attorney Union
                            </Grid>
                        </Grid>
                        <Grid item md={6}  container justifyContent="center">
                            <Grid  container justifyContent="center">
                                <Grid className={classes.quoteBox}>
                                    <p>I was so happy with my first transaction with Election Runner! I made a couple 
                                        of mistakes me their customer service dept was so nice and all about the 
                                        customer! Wouldn't even think of using anyone else! A+++</p>
                                </Grid>
                                <Grid className={classes.quoteTail}>
                                </Grid>
                            </Grid>
                            <Grid style={{marginTop:"1vw", fontSize:18,paddingLeft:'5%', paddingRight:'5%'}}>
                                <b>Elizabeth H.,</b> Quad Moms
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid className={classes.quoteBox}>
                            <p>We did the impossible this year. We held online student council elections, reducing a three-day process to 
                                30 minutes. I was looking at an alternative platform but realised the day before that it was unworkable. 
                                I stumbled onto ElectionRunner and was not disappointed. 
                                It was easy to use and made the process exciting for all parties. I certainly recommend it.</p>
                        </Grid>
                        <Grid className={classes.quoteTail}>
                        </Grid>
                        <Grid style={{marginTop:"1vw", fontSize:18,paddingLeft:'5%', paddingRight:'5%'}}>
                            <b>Ken D.</b> 
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid container justifyContent="center">
                            <Grid className={classes.quoteBox} style={{width:"100vw"}}>
                            
                                <p>It is the best online election platform I have ever seen. I really enjoyed working on it.</p>
                            </Grid>
                            <Grid className={classes.quoteTail}>
                            </Grid>
                        </Grid>
                        <Grid style={{marginTop:"1vw", fontSize:18,paddingLeft:'5%', paddingRight:'5%'}}>
                            <b>Olaleye T., </b>E-VOTING GROUP 
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Button className={classes.createButton} style={{backgroundColor:blue[500]}}>
                            Read More Reviews
                        </Button>
                    </Grid>
                     <Grid container justifyContent="center"  className={classes.image}>
                        <Grid container style={{backgroundColor:`rgba(70,0,120,0.7)`, color:"#fff",paddingBottom:"20px", paddingTop:"50px"}}>
                            
                            <Grid container justifyContent="center" item md={8} >
                                <Grid  container justifyContent="center">
                                    <Typography variant="h4" className={classes.optionTitle}>
                                        Start building your first election
                                    </Typography>   
                                </Grid>
                                <Grid  container justifyContent="center">
                                    <Typography variant="h6" className={classes.optionContent}>
                                        Election Runner is the most powerful online voting software available. 
                                        Don't believe us? See for yourself.
                                    </Typography>      
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center" alignItems="center" item md={4}>
                                <Button className={classes.createButton} style={{fontSize:18}}>Get Started</Button>
                            </Grid> 
                        
                        </Grid>
                        
                    </Grid>
                    <AppBar position="static" style={{backgroundColor:"#001100", marginBottom:"0px"}} elevation={1}>
                        <Grid >
                            <Toolbar>
                            <Grid  item md={7} style={{marginLeft:"10%"}}>
                                <Grid >
                                <Typography variant="body1">
                                    Copyright © 2021 Election Runner
                                </Typography>
                                </Grid>
                                <Grid container >
                                <Grid>
                                    <Typography variant="body1" color="inherit" >
                                    Election Runner is a product of Eko Internet Marketing, LLC.
                                    </Typography>
                                
                                </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={4}>
                                <a>Terms of Service </a>
                            </Grid>
                            </Toolbar>
                        </Grid>
                    </AppBar>
                </Grid> 
            </React.Fragment>
        </>
    );
}
export default HomePage;