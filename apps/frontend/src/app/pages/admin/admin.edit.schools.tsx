import { Footer } from '@shule/web/components';
import { CustomTable, Navbar } from '@shule/web/containers';
import Logo from '../../../assets/Logo.svg';
function AdminEditSchools() {
  return (
    <div className="md:overflow-hidden">
      <Navbar Logo={Logo} />
      <div className="pt-32 px-5">
        <h1 className="text-main text-3xl pb-3 font-bold">Modify Schools</h1>
        <div className="md:flex md:justify-center">{<CustomTable />}</div>;
      </div>
      <Footer logo={Logo} />
    </div>
  );
}

export default AdminEditSchools;
