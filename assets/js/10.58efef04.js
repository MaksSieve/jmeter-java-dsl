(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{437:function(t,a,s){"use strict";s.r(a);var e=s(11),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),s("p",[t._v("There are many tools to script performance/load tests, being "),s("a",{attrs:{href:"http://jmeter.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JMeter"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://gatling.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gatling"),s("OutboundLink")],1),t._v(" the most popular ones.")]),t._v(" "),s("h2",{attrs:{id:"alternatives-analysis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alternatives-analysis"}},[t._v("#")]),t._v(" Alternatives analysis")]),t._v(" "),s("h3",{attrs:{id:"jmeter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmeter"}},[t._v("#")]),t._v(" JMeter")]),t._v(" "),s("p",[t._v("JMeter is great for people with no programming knowledge since it provides a graphical interface to create test plans and run them. Additionally, it is the most popular tool (with a lot of supporting tools built on it) and has a big amount of supported protocols and plugins that makes it very versatile.")]),t._v(" "),s("p",[t._v("But, JMeter has some problems as well: sometimes might be slow to create test plans in JMeter GUI, and you can't get the full picture of the test plan unless you dig in every tree node to check its properties. Furthermore, it doesn't provide a simple programmer friendly API (you can check "),s("a",{attrs:{href:"https://www.blazemeter.com/blog/5-ways-launch-jmeter-test-without-using-jmeter-gui/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(" for an example on how to run JMeter programmatically without jmeter-java-dsl), nor a Git friendly format (too verbose and hard to review). For example, for this test plan:")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Assertions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertThat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("us"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abstracta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jmeter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("javadsl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JmeterDsl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Instant")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ContentType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("junit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jupiter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("us"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abstracta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jmeter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("javadsl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestPlanStats")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceTest")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testPerformance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestPlanStats")]),t._v(" stats "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testPlan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("threadGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("httpSampler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://my.service"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"name\\": \\"test\\"}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ContentType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("APPLICATION_JSON"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this is just to log details of each request stats")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("jtlWriter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Instant")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".jtl"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertThat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("overall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sampleTimePercentile99")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isLessThan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br")])]),s("p",[t._v("In JMeter, you would need a JMX file like "),s("a",{attrs:{href:"https://github.com/abstracta/jmeter-java-dsl/tree/master/docs/motivation/sample.jmx",target:"_blank",rel:"noopener noreferrer"}},[t._v("this"),s("OutboundLink")],1),t._v(", and even then, it wouldn't be as simple to do assertions on collected statistics as in provided example.")]),t._v(" "),s("h3",{attrs:{id:"gatling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gatling"}},[t._v("#")]),t._v(" Gatling")]),t._v(" "),s("p",[t._v("Gatling does provide a simple API and a Git friendly format, but requires scala knowledge and environment. Additionally, it doesn't provide as rich environment as JMeter (protocol support, plugins, tools) and requires learning a new framework for testing (if you already use JMeter, which is the most popular tool).")]),t._v(" "),s("h3",{attrs:{id:"taurus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taurus"}},[t._v("#")]),t._v(" Taurus")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gettaurus.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taurus"),s("OutboundLink")],1),t._v(" is another open-source tool that allows specifying tests in a Git friendly yaml syntax, and provides additional features like pass/fail criteria and easier CI/CD integration. But, this tool requires a python environment, in addition to the java environment. Additionally, there is no built-in GUI or IDE auto-completion support, which makes it harder to discover and learn the actual syntax. Finally, Taurus syntax only supports a subset of the features JMeter provides, which reduces scope usage.")]),t._v(" "),s("h3",{attrs:{id:"ruby-dsl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ruby-dsl"}},[t._v("#")]),t._v(" ruby-dsl")]),t._v(" "),s("p",[t._v("Finally, "),s("a",{attrs:{href:"https://github.com/flood-io/ruby-jmeter",target:"_blank",rel:"noopener noreferrer"}},[t._v("ruby-dsl"),s("OutboundLink")],1),t._v(" is also an opensource library which allows specifying and run in ruby custom dsl JMeter test plans. This is the most similar tool to jmeter-java-dsl, but it requires ruby (in addition to java environment) with the additional performance impact, does not follow same naming and structure convention as JMeter, and lacks of debugging integration with JMeter execution engine.")]),t._v(" "),s("h3",{attrs:{id:"jmeter-java-dsl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmeter-java-dsl"}},[t._v("#")]),t._v(" jmeter-java-dsl")]),t._v(" "),s("p",[t._v("jmeter-java-dsl tries to get the best of these tools by providing a simple java API with Git friendly format to run JMeter tests, taking advantage of all JMeter benefits and knowledge also providing many of the benefits of Gatling scripting.\nAs shown in previous example, it can be easily executed with JUnit, modularized in code and easily integrated in any CI/CD pipeline. Additionally, it makes it easy to debug the execution of test plans with usual IDE debugger tools. Finally, as with most Java libraries, you can use it not only in a Java project, but also in projects of most JVM languages (like kotlin, scala, groovy, etc.).")]),t._v(" "),s("h2",{attrs:{id:"comparison-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comparison-table"}},[t._v("#")]),t._v(" Comparison Table")]),t._v(" "),s("p",[t._v("Here is a table with summary of main pros and cons of each tool:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Tool")]),t._v(" "),s("th",[t._v("Pros")]),t._v(" "),s("th",[t._v("Cons")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("JMeter")]),t._v(" "),s("td",[t._v("👍 GUI for non programmers"),s("br"),t._v("👍 Popularity"),s("br"),t._v("👍 Protocols Support"),s("br"),t._v("👍 Documentation"),s("br"),t._v("👍 Rich ecosystem")]),t._v(" "),s("td",[t._v("👎 Slow test plan creation"),s("br"),t._v("👎 No VCS friendly format"),s("br"),t._v("👎 Not programmers friendly"),s("br"),t._v("👎 No simple CI/CD integration")])]),t._v(" "),s("tr",[s("td",[t._v("Gatling")]),t._v(" "),s("td",[t._v("👍 VCS friendly"),s("br"),t._v("👍 IDE friendly (auto-complete and debug)"),s("br"),t._v("👍 Natural CI/CD integration"),s("br"),t._v("👍 Natural code modularization and reuse"),s("br"),t._v("👍 Less resources (CPU & RAM) usage"),s("br"),t._v("👍 All details of simple test plans at a glance"),s("br"),t._v("👍 Simple way to do assertions on statistics")]),t._v(" "),s("td",[t._v("👎 Scala knowledge and environment required ["),s("a",{attrs:{href:"#gatling-java"}},[t._v("1")]),t._v("]"),s("br"),t._v("👎 Smaller set of protocols supported"),s("br"),t._v("👎 Less documentation & tooling"),s("br"),t._v("👎 Live statistics charts & grafana integration only available in enterprise version")])]),t._v(" "),s("tr",[s("td",[t._v("Taurus")]),t._v(" "),s("td",[t._v("👍 VCS friendly"),s("br"),t._v("👍 Simple CI/CD integration"),s("br"),t._v("👍 Unified framework for running any type of test"),s("br"),t._v("👍 built-in support for running tests at scale"),s("br"),t._v("👍 All details of simple test plans at a glance"),s("br"),t._v("👍 Simple way to do assertions on statistics")]),t._v(" "),s("td",[t._v("👎 Both Java and Python environments required"),s("br"),t._v("👎 Not as simple to discover (IDE auto-complete or GUI) supported functionality"),s("br"),t._v("👎 Not complete support of JMeter capabilities (nor in the roadmap)")])]),t._v(" "),s("tr",[s("td",[t._v("ruby-dsl")]),t._v(" "),s("td",[t._v("👍 VCS friendly"),s("br"),t._v("👍 Simple CI/CD integration"),s("br"),t._v("👍 Unified framework for running any type of test"),s("br"),t._v("👍 built-in support for running tests at scale"),s("br"),t._v("👍 All details of simple test plans at a glance")]),t._v(" "),s("td",[t._v("👎 Both Java and Ruby environments required"),s("br"),t._v("👎 Not following same naming convention and structure as JMeter"),s("br"),t._v("👎 Not complete support of JMeter capabilities (nor in the roadmap)"),s("br"),t._v("👎 No integration for debugging JMeter code")])]),t._v(" "),s("tr",[s("td",[t._v("jmeter-java-dsl")]),t._v(" "),s("td",[t._v("👍 VCS friendly"),s("br"),t._v("👍 IDE friendly (auto-complete and debug)"),s("br"),t._v("👍 Natural CI/CD integration"),s("br"),t._v("👍 Natural code modularization and reuse"),s("br"),t._v("👍 Existing JMeter documentation"),s("br"),t._v("👍 Easy to add support for JMeter supported protocols and new plugins"),s("br"),t._v("👍 Could easily interact with JMX files and take advantage of JMeter ecosystem"),s("br"),t._v("👍 All details of simple test plans at a glance"),s("br"),t._v("👍 Simple way to do assertions on statistics")]),t._v(" "),s("td",[t._v("👎 Basic Java knowledge required"),s("br"),t._v("👎 Same resources (CPU & RAM) usage as JMeter")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Notes")]),t._v(" "),s("ol",[s("li",[s("p",[s("a",{attrs:{name:"gatling-java"}}),t._v(" One year after jmeter-java-dsl release, on November 2021, Gatling released "),s("a",{attrs:{href:"https://gatling.io/2021/11/gatling-3-7-java-dsl-kotlin-and-much-more/",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.7 version"),s("OutboundLink")],1),t._v(", including a Java friendly API for existing Gatling Scala API. This greatly simplifies usage for Java users and is a great addition to Gatling.")]),t._v(" "),s("p",[t._v("As a side note, take into consideration that underlying code is still Scala and async model based, which makes debugging and understanding it harder for Java developers than JMeter code. Additionally, the model is still tied to "),s("code",[t._v("Simulator")]),t._v(" classes and maven (gradle or sbt) plugin to be able to run the tests, compared to the simplicity and flexibility of jmeter-java-dsl tests execution.")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);