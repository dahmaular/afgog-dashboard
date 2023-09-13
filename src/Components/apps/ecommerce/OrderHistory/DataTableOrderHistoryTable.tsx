import DataTable from "react-data-table-component";
import { OrderHistoryTableColumnsData } from "../../../../Data/apps/ecommerce/OrderHistoryTable";
import { useOrdersQuery } from "../../../../Service/orders/service";

const DataTableOrderHistoryTable = () => {
  const { isLoading, data } = useOrdersQuery();

  // console.log("Orderss", data);
  return (
    <DataTable
      data={data?.data as []}
      columns={OrderHistoryTableColumnsData}
      className="table-bordernone display"
      noHeader
      pagination
      paginationServer
    />
  );
};

export default DataTableOrderHistoryTable;
