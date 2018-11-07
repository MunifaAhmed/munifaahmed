import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route} from 'react-router-dom'

class App extends Component {
  state={
    name:''
  }
  updateName=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  render() {
    return (
      <div className="App">
      <div id='main'>
     
      <nav>
        <ul >
          <li > <Link to='/home'>Home</Link></li>
          <li ><Link to='/aboutus'>About Us</Link></li>
          <li ><Link to='/tools'>Tools</Link> </li>
          <li ><Link to='/contactus'>Join Us</Link></li>
        </ul>
        


        </nav>
        

      <Switch>
         <Route  path= '/home' render= {(routerProps)=> <Home {...routerProps } />}/>
        <Route path= '/aboutus' component= {AboutUs}/>
        <Route path= '/tools' component= {Tools}/>
        <Route path= '/contactus' component= {ContactUs}/>
        <Route path= '/thankyou' render= {(routerProps)=> <Thankyou {...routerProps } updateName={this.updateName} name={this.state.name}/>}/>
      </Switch>
      </div>
      </div>
    );
  }
}
 const Home = (props)=> {
     let buttONClick =()=> props.history.push('/aboutus')
     let buttoNClick =()=> props.history.push('/tools')
   return(
     
     <div>
    <div id='containerhome1'>
       <h1 id ='homeh1'> MMCC</h1>
       <div id='homep1'>
       <p>Meal Meat Carbon Calculator is a web app that creates a network of green community that fight for greener earth. It raises awarness of global warming especially in agriclture sector and help individual calculate and create a reporting personalized accounts for there carbon footprint in regards to there regular consumption of meat product.</p>
       </div>
       </div>
       <div id ='main2'>
          <button  role="button"  onClick={buttONClick} >Learn More ...</button>
          <button  role="button" aria-pressed="true" onClick={buttoNClick} >Try us ...</button>
         
        <Switch>

        </Switch>
        </div>
      </div>
   )
  }

const AboutUs =()=> {
return (
   <div id='LM'>
    <h1 id='LMheader'> MMCC</h1>
    <h2>Meal Meat Carbon Calculator</h2>
    <div className='row'>
    <div className='col'>
   
    <h3 >If you're looking to reduce your carbon footprint, your diet is a good place to start—specifically and especially with beef.</h3>
    </div>
    <p>
    <div className='col'>
    Beef’s environmental impact dwarfs that of other meat including chicken and pork, new research reveals, with one expert saying that eating less red meat would be a better way for people to cut carbon emissions than giving up their cars.
    </div>
    <div className='col'>
    The heavy impact on the environment of meat production was known but the research shows a new scale and scope of damage, particularly for beef. The popular red meat requires 28 times more land to produce than pork or chicken, 11 times more water and results in five times more climate-warming emissions. When compared to staples like potatoes, wheat, and rice, the impact of beef per calorie is even more extreme, requiring 160 times more land and producing 11 times more greenhouse gases.
    </div>
    <div className='col'>
    Agriculture is a significant driver of global warming and causes 15% of all emissions, half of which are from livestock. Furthermore, the huge amounts of grain and water needed to raise cattle is a concern to experts worried about feeding an extra 2 billion people by 2050. But previous calls for people to eat less meat in order to help the environment, or preserve grain stocks, have been highly controversial. 
    </div>
    <div className='col'>
    Jamais Cascio, former managing editor over at Worldchanging and current proprietor of Open the Future, recently got to wondering: with all the recent hubbub surrounding carbon footprints, credits and offsets, what do everyday, common items contribute to our warming globe? He started with an American institution: the cheeseburger, and, after a little digging and number-crunching he came up with 6.3 to 6.8 pounds (2.85 to 3.1 kg) of carbon emissions per burger. This includes a myriad of factors, from growing the feed for the cattle for the beef and cheese, growing the produce, storing and transporting the components, as well as cooking them all, and he appears to have done a fairly thorough job. So, why choose burgers? The average American eats three burgers per week, or about 150 burgers per year; that's a lot of beef, cheese, shipping and grilling, and it really adds up. According to Jamais' calculations, America's love of burgers contributes approximately 941 to 1023 pounds (that's 428-465 kg) of greenhouse gas per person, per year -- the rough equivalent of the annual carbon output from 7,500-15,000 SUVs if the 300 million US citizens hit the 3 burgers/week average. Will Carbon McCredits soon be appearing on menus across the country (and the world)? Jamais' discerning look at this common food item suggests we may want to think about it.
    </div>
    <div className='col'>
    After reducing intercontinental flights, dependence on cars, and living in the 'burbs, reducing your meat consumption is one of the strongest ways to reduce your carbon footprint. As reported by The Washington Post, about a third of all greenhouse gasses comes from food production and agriculture. None of this is news, but the Post shows how we can now quantify just how costly beef is to the environment, as cattle produce a staggering amount of methane, a nasty greenhouse gas.
    </div>
    <div className='col'>
    The article cites a recent study by the University of Minnesota, which shows how by swapping out one beef-based meal a week for beans, you can avoid releasing 331 kilograms (730 pounds) of carbon dioxide every year. While chicken and pork aren't environmentally great, they're much less carbon-intensive than beef. Lamb, however, is also pretty carbon-costly.
    </div>
    <div className='col'>
    That said, not all beef is equal. Farms that grass-feed and manage their cattle properly for "carbon sequestration"—long-term storage of carbon—can actually have a positive impact on the environment. When cattle graze on real grass, carbon is locked away in the soil, stopping it from entering the biosphere. “At minimum [we could produce] carbon-neutral beef but most likely a beef product that has a negative carbon-footprint,” Jason Rowntree, associate professor at Michigan State University, told The Post. But don't think that just because you're buying beef marketed as "grass-fed" you're doing your part—it's impossible to know exactly what goes on at these purportedly organic farms, and whether or not the farmers in question are managing for carbon sequestration.
    </div>
    </p>
    </div>
  </div>
)
}
class Tools extends Component {
  state={
    order: '',
    num: '0',
    rate: '0',
    yearWeek: '52',
    result:'',
    petrolPrice: '1.33',
    CPL: '0.43',
    result2: '0',
    name:''

  }

  

 orderChange=order=>{
   this.setState({
     order
   })
 }
 numChange=num=>{
   console.log(num)
  this.setState({
    num:Number(num)
  })
}
rateChange = rate => {
  this.setState({
    rate:Number(rate)
  })
}
updateResult=()=>{
  if(this.state.order === 'humburger'){
    this.state.result = this.state.num*this.state.rate*Number(this.state.yearWeek)*3
  }else if(this.state.order === 'steak'){
    this.state.result= this.state.num*this.state.rate*Number(this.state.yearWeek)*2
  }else{
    this.state.result = this.state.num*this.state.rate*Number(this.state.yearWeek)*4
  }
  this.setState({
    result:this.state.result,
    result2: Number(this.state.CPL)*this.state.result
    
  })
  console.log(this.state.result2, 'second')
}


 render(){
   {console.log(this.state.result2, ' this later')}
   return(
        <div>
          <h1 id='IC'>Instant Calculator</h1>
          <h3>The climate can change even by just ditching beef one day a week</h3>
          <div className='col sm' id='calculator'>
          <form>
            <div class="form-group">
              <label for="sel1">What are you ordering?</label>
              <select class="form-control" id="sel1" onChange={e=>this.orderChange(e.target.value)}>
                <option></option>
                <option value= 'humburger'>Humburger</option>
                <option value='steak'>Steak</option>
                <option value='beef'>Beef, per serving</option>
              </select>
            
              
              <label for="sel1">How many you are ordering?</label>
              <select class="form-control" id="sel1" onChange={e=>this.numChange(e.target.value)}>
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
             
              <label for="sel1">Rate of your ordering per week?</label>
              <select class="form-control" id="sel1" onChange={e=>this.rateChange(e.target.value)}>
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
             <button type='button' onClick={this.getResult2} onClick={this.updateResult} name='result'>Result</button>
             <h3 id='result'>According to Jamais Cascio research, the diet decision you will take will impact the mother earth by add {this.state.result} kg carbon. This is the amount of carbon released by burning {this.state.result2} of petrol. This is the price earth is paying to keep us everyday.</h3>
             </div>
              
          </form>
          </div>
          <Switch>
            
        </Switch>
        </div>
        
   )
 }
}

const ContactUs = (props)=> {
  const submitForm = () => props.history.push('/thankyou')
  return( 
       <div>
          <h1 id='JS'>Join Us</h1>

          
             <form>
               <div class="group">
              <div class="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" onChange={props.updateName} name='name'/>
                </div>
                <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="form-group">
                <label for="exampleFormControlInput1">Phone No.</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="optional"/>
                </div>
              
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Have green Ideas! Connect and lets Collarborate 🙂 </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button onClick={submitForm}>Submit</button>
              </div>
            </form>
            </div>
            
  )
}

const Thankyou = props => (
   <div>
     <div id='thankyou'>
     <h1>Thank you for your application. We will get back to you  😁 {props.name}</h1>
     </div>
   </div>
)

export default App;
