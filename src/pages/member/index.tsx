import OverviewContent from "@/components/organisms/OverviewContent";
import SideBar from "@/components/organisms/SideBar";

export default function Overview() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="Overview" />
      <OverviewContent />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
