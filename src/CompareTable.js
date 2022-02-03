import BarGraph from './BarGraph';
import compareResults from '../src/compareResults';
import './App.css';
import {parties_2004} from '../src/Parties-data/parties_2004'
import {parties_2008} from '../src/Parties-data/parties_2008'
import {parties_2012} from '../src/Parties-data/parties_2012'

import {results_2004} from '../src/Results-data/results_2004'
import {results_2008} from '../src/Results-data/results_2008'
import {results_2012} from '../src/Results-data/results_2012'
console.log(results_2004)
let  mapStateData = [];
let parties = [];

let winnersList=[];
let topFiveWinners = [6];
function theTopFiveWinners(arg){
    // for (var key1 in arg) {
    //     for (var key2 in key1) {
    //         winnersList.push({partyName: key2.parties[0],candidatName: key2,Vote:key2.votes})
    //     }

    // }
    console.log("before "+winnersList.length)
    winnersList.sort((a, b) => (a.Vote > b.Vote) ? 1 : -1)
    console.log("after "+winnersList.length)
}
theTopFiveWinners(results_2004);
// get the state in an array
for (const property in results_2004) {
    var mySubString = property.substring(5);
    // console.log(mySubString)
    mapStateData.push({state:mySubString,topFive:[]})
    // var name = property.substring(val.indexOf(":"));
    // console.log(`${property}: ${results_2004[property]}`);
} console.log("mapDtata "+mapStateData[0].state)
for (const property in parties_2004) {
    parties.push(property)
}
// console.log("the parties "+parties)
function CompareTable() {
//  {mapStateData.map((state) => {
  return (
    <div className="App">
     <div className='Requirement'> Chalenge 1: To list a sorted data by the number of votes</div>
      <table class="table table-bordered table-dark">
  <thead>
    <tr>
      <th scope="col" className='stateName'>State Names:</th>
      <th scope="col">1st Candite</th>
      <th scope="col">2nd Candite </th>
      <th scope="col">3 Candite</th>
      <th scope="col">4th Candite</th>
      <th scope="col">5th Candite</th>
    </tr>
  </thead>
  <tbody>
  {mapStateData.map(name =>
    <tr>
      <th scope="row" className='stateListName'>{name.state}</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    )}
  </tbody>
</table>

    </div>
  );
// })}
}

export default CompareTable;
