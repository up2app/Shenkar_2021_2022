
import { useEffect, useState } from 'react';

function App() {

  const [numOfFlights, SetNumOfFlights] = useState(5)
  const [fligths, SetFligths] = useState({
    fields: [],
    records: []
  });
  
  useEffect(() => {
    loadFlights();
  }, [numOfFlights])

  const loadFlights = async () => {
    //פנייה לשירות לשליפת המידע
    let res = await fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=e83f763b-b7d7-479e-b172-ae981ddc6de5&limit=${numOfFlights}`);

    //קבלת המידע הרלוונטי לאחר המרה לג'ייסון
    let data = await res.json();

    //console.log('data ==> ', data.result);

    //אם התקבלה תשובה תקינה מהשרת, נשמור בסטייט
    if (data.success)
      SetFligths(data.result)

  }

  return (
    <div className="App">
        <div>
          <label htmlFor="num">מספר טיסות להצגה: </label>
          <input id="num" type="number" min="5" value={numOfFlights} onChange={(event)=>SetNumOfFlights(event.target.value)}/>
        </div>
      <table>
        <tr>
          <td>מספר טיסה</td>
          <td>חברת תעופה</td>
          <td>תאריך יציאה</td>
          <td>מדינה</td>
          <td>עיר</td>
          <td>סטטוס</td>
        </tr>
        {
          fligths.records.map(item =>
            <tr key={item.CHFLTN}>
              <td>{item.CHFLTN}</td>
              <td>{item.CHOPERD}</td>
              <td>{item.CHSTOL}</td>
              <td>{item.CHLOC1CH}</td>
              <td>{item.CHLOC1TH}</td>
              <td>{item.CHRMINH}</td>
            </tr>
          )
        }
      </table>
    </div>
  );
}

export default App;
