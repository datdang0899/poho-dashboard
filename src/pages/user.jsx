import Avatar from "../components/common/Avatar";
import Form from "../components/common/Form";
import Sidebar from "../components/layouts/Sidebar";
import LanguageSelector from "../components/common/LanguageSelector";
import CoverImage from "../components/common/CoverImage";
import Breadcrumb from "../components/common/Breadcrumb";
import Button from "../components/common/Button";
import Dashboard from "../components/common/Dashboard";
import TopNav from "../components/common/TopNav";

function User(props) {
  return (
    <Sidebar>
      <Dashboard>
        <TopNav>
          <Breadcrumb />
          <Button />
        </TopNav>
        <CoverImage />
        <Avatar />
        <LanguageSelector />
        <div className="flex flex-row gap-4 ">
          <Form />
          <Form />
        </div>
      </Dashboard>
    </Sidebar>
  );
}

export default User;
