import NavBar from "components/navbar";
import Footer from "components/footer";
import DataTable from "components/dataTable";
import BarChart from "components/barChart";
import DonutChart from "components/donutChart";
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3"> Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso(%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Participação nas Vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className="row px-3">
        <h2 className="text-primary">Todas as Vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
