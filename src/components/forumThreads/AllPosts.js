import React, {Component} from 'react';
import Title from '../topicElements/Title';
import Author from '../topicElements/Author';

class Pinned extends Component {
  render(){
    return(
      <div>
        <div className="card mt-2">
        <div className="card-header pb-0">
          <h5>Pinned topics</h5>
        </div>
        <div className="card-body p-0">
        <table class="table table-striped mb-0">
            <tbody>
              <tr>
                <th scope="row">-</th>
                <td className="pl-0"><Title title="[ATENTOS] Próximas fechas de torneos Junio-Julio 2019"></Title></td>
                <td className="align-middle text-center"><Author author="German" club="Admin"></Author></td>
                <td className="align-middle text-center">14 responses</td>
              </tr>
              <tr>
                <th scope="row">-</th>
                <td className="pl-0"><Title title="Reglas del foro"></Title></td>
                <td className="align-middle text-center"><Author author="Uri" club="Admin"></Author></td>
                <td className="align-middle text-center">231 responses</td>
              </tr>
              <tr>
                <th scope="row">-</th>
                <td className="pl-0"><Title title="Salón de la fama. Partidos épicos."></Title></td>
                <td className="align-middle text-center"><Author author="Mache" club="Admin"></Author></td>
                <td className="align-middle text-center">23 responses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card mt-2">
      <div className="card-header pb-0">
        <h5 className="green">Latest posts in Subforum</h5>
      </div>
      <div className="card-body p-0">
        <table class="table table-striped mb-0">
            <tbody>
              <tr>
                <th scope="row">-</th>
                <td className=""><Title title="Like the cofee"></Title></td>
                <td className="align-middle text-center"><Author author="Maradona" club="Boca Juniors"></Author></td>
                <td>14 responses</td>
              </tr>
              <tr>
                <th scope="row">-</th>
                <td><Title title="Users from Argentina here?"></Title></td>
                <td className="align-middle text-center"><Author author="Messi" club="El Barça"></Author></td>
                <td>231 responses</td>
              </tr>
              <tr>
                <th scope="row">-</th>
                <td><Title title="I think Club Atletico Platense is a very good club"></Title></td>
                <td className="align-middle text-center"><Author author="Arturo" club="Los locos del asado"></Author></td>
                <td>23 responses</td>
              </tr>
            </tbody>
          </table>
      </div>
      </div>
    </div>
    )
  }
}

export default Pinned;