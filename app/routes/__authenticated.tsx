import {json} from '@remix-run/router';
import {Outlet, ShouldRevalidateFunction} from '@remix-run/react';

export const shouldRevalidate: ShouldRevalidateFunction = () => {
  return false;
};

export async function loader() {
  return json({ user: {name: 'Zach'} });
}

export default function App() {
  return <div>
    <Outlet/>
  </div>
}
