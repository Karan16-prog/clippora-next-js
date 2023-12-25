import { Session, getServerSession } from "next-auth";
import { AddLink } from "../add/addLink";
import { SignOutBtn } from "../button/button";
import styles from "./navbar.module.css";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function NavBar() {
  const session = await getServerSession(authOptions);
  console.log("Session:", session);

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <nav>
          <div>
            {/* logo */}
            <span>Logo</span>
          </div>

          <div
            style={{
              flexGrow: 1,
            }}
          >
            <AddLink session={session} />
          </div>

          <div>
            <div>{`Hi ${session?.user?.name}`}</div>
            <SignOutBtn />
          </div>
        </nav>
      </div>
    </div>
  );
}
