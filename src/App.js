import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <table border="">
      <tr>
      <th className='blackBackground text' >First Name</th>
      <th className='text'>Last Name</th>
      <th className='blackBackground text'>Image</th>
      </tr>
      <tr>
        <td className='text'>Rutuja</td>
        <td className='blackBackground text'>date</td>
        <td><img src="../Assets/bigHouse.jpg" width="50px"/></td>
      </tr>
      <tr>
        <td className='blackBackground text'>Shravani</td>
        <td className='text'>gunjal</td>
        <td><img src="../Assets/sweetDish.jpg" width="50px"/></td>
      </tr>
      <tr>
        <td className='text'>Trusha</td>
        <td className='blackBackground text'>Nimse</td>
        <td><img src="../Assets/girl.jpg" width="50"/></td>
      </tr>
      <tr>
        <td className='blackBackground text'>Shardul</td>
        <td className='text'>Pawar</td>
        <td><img src="../Assets/img4.jpg" width="50px"/></td>
      </tr>
      <tr>
        <td className='text'>Gaurav</td>
        <td className='blackBackground text'>Pawar</td>
        <td><img src="../Assets/img5.jpg" width="50"/></td>
      </tr>


</table>
    </div>
    
  );
}

export default App;
