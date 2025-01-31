import React from "react";
import { GithubOne, Home, Mail } from "@icon-park/react";
import CustomLink from "@/components/customLink";
import Package from "../../package.json";

const Footer = () => {
  // 加载配置
  const githubName = import.meta.env.VITE_GITHUB_NAME;
  const homeUrl = import.meta.env.VITE_HOME_URL;
  const emailUrl = import.meta.env.VITE_EMAIL_URL;
  const siteIcp = import.meta.env.VITE_SITE_ICP;
  const siteMoeIcp = import.meta.env.VITE_SITE_MoeICP;

  return (
    <footer id="footer">
      <div className="social">
        <CustomLink
          iconDom={<GithubOne />}
          to={`https://github.com/${githubName}/`}
        />
        <CustomLink iconDom={<Home />} to={homeUrl} />
        <CustomLink iconDom={<Mail />} to={`mailto:${emailUrl}`} />
      </div>
      <div className="text">
        <p>
          <CustomLink
            text={Package.alia}
            to="https://github.com/imsyy/site-status"
          />
          &nbsp;Version&nbsp;{Package.version}
        </p>
        <p>
          基于&nbsp;
          <CustomLink to="https://uptimerobot.com/" text="UptimeRobot" />
          &nbsp;接口&nbsp;|&nbsp;检测频率 5 分钟
          |&nbsp;
          <CustomLink to="https://status.yorushi.com/" text="ServerStatus" />
        </p>
        <p>
          Copyright&nbsp;&copy;&nbsp;2019&nbsp;-&nbsp;{new Date().getFullYear()}
          &nbsp;
          <CustomLink to="https://space.bilibili.com/12982030" text="丿丶夜曦" />
          {siteIcp ? (
            <React.Fragment>
              &nbsp;|&nbsp;
              <CustomLink to="https://beian.miit.gov.cn/" text={siteIcp} />
            </React.Fragment>
          ) : null}
          {siteMoeIcp ? (
            <React.Fragment>
              &nbsp;|&nbsp;
              <CustomLink to="https://icp.gov.moe/" text={siteMoeIcp} />
            </React.Fragment>
          ) : null}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
