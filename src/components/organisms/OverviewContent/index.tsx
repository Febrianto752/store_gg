import { useCallback, useEffect, useState } from "react";
import Category from "./Category";
import TableRow from "./TableRow";
import { getMemberOverview } from "@/services/member";
import { toast } from "react-toastify";
import { TopUpCategoriesTypes } from "@/services/data-types";

export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const getMemberOverviewAPI = useCallback(async () => {
    const response = await getMemberOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      setCount(response.data.count);
      setData(response.data.data);
    }
  }, []);

  useEffect(() => {
    getMemberOverviewAPI();
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((item: TopUpCategoriesTypes) => (
                <Category
                  key={item._id}
                  nominal={item.value}
                  icon={`ic-${item.name}`}
                >
                  {item.name}
                </Category>
              ))}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  image="/img/overview-1.png"
                  title="Mobile Legend"
                  category="Desktop"
                  item="200 Gold"
                  price={290000}
                  status="pending"
                />
                <TableRow
                  image="/img/overview-2.png"
                  title="Call of Duty:Modern"
                  category="Desktop"
                  item="550 Gold"
                  price={740000}
                  status="success"
                />

                <TableRow
                  image="/img/overview-3.png"
                  title="Clash of Clans"
                  category="Mobile"
                  item="100 Gold"
                  price={120000}
                  status="failed"
                />

                <TableRow
                  image="/img/overview-4.png"
                  title="The Royal Game"
                  category="Mobile"
                  item="225 Gold"
                  price={200000}
                  status="pending"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
