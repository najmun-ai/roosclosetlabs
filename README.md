# Startup Profile and Products

**RoosCloset Labs - A Year of Exploration and Focus**

---

## The Journey

A year ago, I set out to build simple e-commerce tools for businesses in Bangladesh. The vision was practical: create digital solutions that made sense for the local market. The domain `rooscloset.store` reflected that original mission—a closet of tools for store owners.

But as I studied the problems facing digital businesses in Bangladesh and globally, I discovered something deeper. The opportunities were not just in tooling. They were in solving fundamental challenges that had gone unaddressed for years.

Over the course of twelve months, through research, prototyping, and production deployment, I identified two distinct but complementary problems:

1. Civic administration systems in Bangladesh remain fragmented and difficult to navigate. Citizens lack digital support for government documentation and processes.
2. Fashion e-commerce globally loses 100 billion dollars annually to returns caused by poor product data, sizing uncertainty, and a lack of predictive intelligence[span_0](start_span)[span_0](end_span).

These discoveries led to a strategic pivot. Instead of building a general e-commerce toolkit, I chose to build two focused, AWS-native products solving specific, high-impact problems. Both are now deployed, documented, and ready for production use.

---

## The Two Product Silos

### PROJECT 1: BOROBHAI - Bengali Civic AI Assistant
**Repository:** [najmun-ai/Bangla-AI](https://github.com/najmun-ai/Bangla-AI)  
**Status:** Complete and production-ready

BoroBhai is an AI-powered civic assistant helping Bengali-speaking citizens navigate government documentation and administrative processes through conversational AI[span_1](start_span)[span_1](end_span).

* **Capabilities:** Provides real-time guidance, generates civic documents (CVs, letters, applications, certificates), handles file manipulation (PDF compression, image resizing, Excel generation), and offers Bengali voice input[span_2](start_span)[span_2](end_span).
* **Retrieval Architecture:** Context-aware information is retrieved from a specialized knowledge base encompassing 179 civic procedures[span_3](start_span)[span_3](end_span).
* **Target Users:** Bangladeshi citizens navigating complex government processes[span_4](start_span)[span_4](end_span).
* **Business Model:** Freemium (free tier with limited requests, paid tier for unlimited access)[span_5](start_span)[span_5](end_span).
* **Impact:** Reduces friction in civic administration, helping underserved populations access government services[span_6](start_span)[span_6](end_span).

### PROJECT 2: ROOSCLOSET RETAIL INTELLIGENCE
**Repository:** [najmun-ai/rooscloset-retail-intelligence](https://github.com/najmun-ai/rooscloset-retail-intelligence)  
**Status:** Complete and production-ready

RoosCloset Retail Intelligence is a B2B AWS-native machine learning platform solving the 100 billion dollar annual loss in fashion e-commerce caused by catalog misattribution and poor return prediction[span_7](start_span)[span_7](end_span).

* **ATLAS (Semantic Catalog Intelligence):** Transforms raw product images and merchant descriptions into 180+ structured attributes and generates 512-dimensional style embeddings for aesthetic search[span_8](start_span)[span_8](end_span). Extracts return risk flags in under 60 seconds per SKU, replacing manual tagging teams and legacy tools[span_9](start_span)[span_9](end_span).
* **MIRROR (Causal Return Intelligence):** Scores orders at checkout in under 150ms[span_10](start_span)[span_10](end_span). Explains the causal roots of returns, prescribes ranked interventions with ROI estimates, and learns with every order through a cross-product flywheel[span_11](start_span)[span_11](end_span).
* **Target Customers:** DTC brands and multi-brand retailers with 1,000-50,000 SKUs and $1M-$50M GMV[span_12](start_span)[span_12](end_span).
* **Business Model:** Usage-based SaaS (per-SKU for ATLAS, per-order for MIRROR)[span_13](start_span)[span_13](end_span).
* **Impact:** Reduces return rates by identifying causal roots, improving catalog quality through continuous learning[span_14](start_span)[span_14](end_span).

---

## Engineering Philosophy & AWS Infrastructure

Both products share the same core insight: AI should solve specific, high-impact problems rather than provide generic tooling. Both are AWS-native, multi-tenant from day one, and designed to be deployed, not just consumed.

Together, they demonstrate mastery across two distinct verticals utilizing **22 AWS native services** for scalability, reliability, and cost efficiency[span_15](start_span)[span_15](end_span).

### BOROBHAI (7 AWS Services)
* **Compute:** AWS Lambda (orchestrator, file tools, presign handler) & AWS API Gateway (HTTP/2 REST API)[span_16](start_span)[span_16](end_span).
* **AI & ML:** Amazon Bedrock (Claude 3.5 Sonnet) & Amazon Titan Embeddings (1024-dimensional vectors)[span_17](start_span)[span_17](end_span).
* **Storage & DB:** Amazon S3 (7-day lifecycle) & DynamoDB (session state)[span_18](start_span)[span_18](end_span).
* **Monitoring:** Amazon CloudWatch[span_19](start_span)[span_19](end_span).
* **Cost Efficiency:** Highly optimized architecture running at $22 per month at MVP scale[span_20](start_span)[span_20](end_span).

### ROOSCLOSET RETAIL INTELLIGENCE (15 AWS Services)
* **Compute & Orchestration:** AWS Lambda, AWS Step Functions (5-stage ATLAS pipeline), AWS API Gateway[span_21](start_span)[span_21](end_span).
* **AI & ML:** Amazon Bedrock (Claude 3 Sonnet), Amazon SageMaker (CLIP model, XGBoost), Amazon Rekognition[span_22](start_span)[span_22](end_span).
* **Storage & Data:** Amazon S3, Amazon DynamoDB, Amazon OpenSearch Serverless[span_23](start_span)[span_23](end_span).
* **Streaming:** Amazon Kinesis, Amazon SQS, Amazon EventBridge[span_24](start_span)[span_24](end_span).
* **Security & Auth:** Amazon Cognito (multi-tenant user management)[span_25](start_span)[span_25](end_span).
* **Cost Efficiency:** Designed for massive scale; running at $35-50/month at MVP scale, scaling to $1,500-$2,500/month at 10M orders[span_26](start_span)[span_26](end_span).

Both architectures are 100% defined as TypeScript CDK infrastructure as code[span_27](start_span)[span_27](end_span). This is production ML infrastructure, not a wrapper[span_28](start_span)[span_28](end_span).

---

## Execution Roadmap

**Phase 1 (Completed): Production Maturity**
* BoroBhai: Complete codebase (39 files, 340 KB) deployed and documented[span_29](start_span)[span_29](end_span).
* RoosCloset: Complete codebase (18 files, 156 KB) deployed and documented[span_30](start_span)[span_30](end_span).

**Phase 2 (Months 1-4): Soft Launch & Product-Market Fit**
* Deploy ATLAS and MIRROR for pilot retailers[span_31](start_span)[span_31](end_span).
* Test BoroBhai with civic partners in Bangladesh[span_32](start_span)[span_32](end_span).
* Measure initial signals and refine pricing models[span_33](start_span)[span_33](end_span).

**Phase 3 (Months 5-8): Scale & Professionalize**
* Scale to 5-10 paid customers[span_34](start_span)[span_34](end_span).
* Hire first full-stack or backend developer[span_35](start_span)[span_35](end_span).
* Build sales infrastructure and optimize models based on live data[span_36](start_span)[span_36](end_span).

**Phase 4 (Months 9-12): Institutional Preparation**
* Achieve positive unit economics[span_37](start_span)[span_37](end_span).
* Compile portfolio of case studies and metrics[span_38](start_span)[span_38](end_span).

---

## Contact

**Founder:** Najmun Nahar Khan  
**Email:** najmun@rooscloset.store  
**Phone:** +8801798344063  
**Website:** www.rooscloset.store  
**GitHub:** [najmun-ai](https://github.com/najmun-ai)
