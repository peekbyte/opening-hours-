import * as React from "react";
import Helmet from 'react-helmet';
interface PageProps {
    pageTitle: string;
    pageVerticalAlign: string;
    children: React.ReactNode
}

const Page = (props: PageProps) => (<div className={"page"}>
    <Helmet>
        <title>{props.pageTitle}</title>
    </Helmet>

    <div className={["page__contents", `page__contents--${props.pageVerticalAlign}`].join(" ")}>
        {props.children}
    </div>
</div>);
export default Page