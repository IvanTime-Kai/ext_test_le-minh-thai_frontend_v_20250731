import Header from './_components/Header';
import ListFoodItem from './_components/ListFoodItem';
import MealProgressCard from './_components/MealProcessCard';
import MonthlyLineChart from './_components/MonthlyLineChart';
import Services from './_components/Services';
import HomeLayout from './layout/HomeLayout';

export default function Home() {
  return (
    <HomeLayout>
      <div className="grid grid-cols-7">
        <MealProgressCard />
        <MonthlyLineChart />
      </div>
      <Services />
      <ListFoodItem />
    </HomeLayout>
  );
}
