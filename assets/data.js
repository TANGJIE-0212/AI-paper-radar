// AI Paper Radar - Weekly Analysis
const PAPER_DATA = {
  "week": "2026-W17",
  "dateRange": "2026-04-19 to 2026-04-25",
  "dimensions": {
    "understanding": {
      "name": "理解与记忆",
      "icon": "🧠",
      "keywords": ["long context", "reasoning", "chain of thought", "inference", "math", "RAG", "memory", "retrieval"]
    },
    "action": {
      "name": "行动能力",
      "icon": "🧰",
      "keywords": ["tool use", "agent", "function calling", "planning", "MCP", "code"]
    },
    "multimodal": {
      "name": "多模态",
      "icon": "🖼",
      "keywords": ["vision", "image", "video", "visual", "OCR"]
    },
    "efficiency": {
      "name": "效率与成本",
      "icon": "⚙️",
      "keywords": ["quantization", "distillation", "compression", "pruning", "efficient"]
    },
    "safety": {
      "name": "可靠性与安全",
      "icon": "🛡",
      "keywords": ["hallucination", "alignment", "safety", "robustness", "evaluation", "guardrail"]
    },
    "robotics": {
      "name": "机器人/具身智能",
      "icon": "🦾",
      "keywords": ["robot", "VLA", "embodied", "world model", "simulation"]
    }
  },
  "papers": [
    {
      "id": 1,
      "title": "Tstars-Tryon 1.0: Robust and Realistic Virtual Try-On for Diverse Fashion Items",
      "url": "https://huggingface.co/papers/2604.19748",
      "likes": 244,
      "date": "2026-04-26",
      "published_date": "Apr 21",
      "abstract": "Recent advances inimage generationand editing have opened new opportunities forvirtual try-on. However, existing methods still struggle to meet complex real-world demands. We present Tstars-Tryon 1.0, a commercial-scalevirtual try-onsystem that is robust, realistic, versatile, and highly efficient. First, our system maintains a high success rate across challenging cases like extreme poses, severe illumination variations, motion blur, and other in-the-wild conditions. Second, it delivers highlyphotorealistic resultswith fine-grained details, faithfully preserving garment texture, material properties, and structural characteristics, while largely avoiding common AI-generated artifacts. Third, beyond apparel try-on, our model supports flexible multi-image composition (up to 6 reference images) across 8 fashion categories, with coordinated control over person identity and background. Fourth, to overcome the latency bottlenecks of commercial deployment, our system is heavily optimized for inference speed, delivering near real-time generation for a seamless user experience. These capabilities are enabled by an integrated system design spanningend-to-end model architecture, ascalable data engine,robust infrastructure, and amulti-stage trainingparadigm. Extensive evaluation and large-scale product deployment demonstrate that Tstars-Tryon1.0 achieves leading overall performance. To support future research, we also release a comprehensive benchmark. The model has been deployed at an industrial scale on the Taobao App, serving millions of users with tens of millions of requests.",
      "github_url": null,
      "org_tag": "alibaba-inc",
      "dimension": "multimodal",
      "tech_core": "它把虚拟试衣做成一整套工业化系统：不只会把衣服贴上去，还能扛住复杂姿态、光照、模糊和多图组合，同时把延迟压到接近实时。",
      "value": "适合电商试穿、穿搭推荐和广告素材生产，解决线上试衣一遇到真人复杂照片就穿帮、用户等太久就流失的老问题。",
      "pm_suggestion": "如果你在做服饰电商，别再把虚拟试穿当营销噱头，直接接进商品详情页和投放素材链路；能稳定跑千万级请求的能力已经配拿转化预算。"
    },
    {
      "id": 2,
      "title": "LLaDA2.0-Uni: Unifying Multimodal Understanding and Generation with Diffusion Large Language Model",
      "url": "https://huggingface.co/papers/2604.20796",
      "likes": 227,
      "date": "2026-04-26",
      "published_date": "Apr 22",
      "abstract": "We present LLaDA2.0-Uni, a unifieddiscrete diffusionlarge language model(dLLM) that supportsmultimodal understandingand generation within a natively integrated framework. Its architecture combines a fullysemantic discrete tokenizer, a MoE-based dLLM backbone, and adiffusion decoder. By discretizing continuous visual inputs viaSigLIP-VQ, the model enablesblock-level masked diffusionfor both text and vision inputs within the backbone, while the decoder reconstructs visual tokens into high-fidelity images. Inference efficiency is enhanced beyondparallel decodingthroughprefix-aware optimizationsin the backbone andfew-step distillationin the decoder. Supported by carefully curatedlarge-scale dataand a tailoredmulti-stage training pipeline, LLaDA2.0-Uni matches specialized VLMs inmultimodal understandingwhile delivering strong performance in image generation and editing. Its native support forinterleaved generationandreasoningestablishes a promising and scalable paradigm for next-generation unified foundation models. Codes and models are available at https://github.com/inclusionAI/LLaDA2.0-Uni.",
      "github_url": "https://github.com/inclusionAI/LLaDA2.0-Uni",
      "org_tag": "inclusionAI",
      "dimension": "multimodal",
      "tech_core": "它试图用一套扩散式大模型同时搞定看图理解、出图生成和编辑，不再把理解模型和生成模型拆成两条分裂管线。",
      "value": "适合多模态工作台、创意助手和设计生产工具，解决现在产品里“看得懂的模型不会画、会画的模型又听不懂上下文”的割裂问题。",
      "pm_suggestion": "如果你在做多模态平台，把统一底座列为核心技术方向；继续堆多个专用模型只会让产品体验和成本结构一起失控。"
    },
    {
      "id": 3,
      "title": "AgentSPEX: An Agent SPecification and EXecution Language",
      "url": "https://huggingface.co/papers/2604.13346",
      "likes": 153,
      "date": "2026-04-26",
      "published_date": "Apr 14",
      "abstract": "Language-model agent systems commonly rely on reactive prompting, in which a single instruction guides the model through an open-ended sequence of reasoning and tool-use steps, leavingcontrol flowand intermediate state implicit and making agent behavior potentially difficult to control. Orchestration frameworks such as LangGraph, DSPy, and CrewAI impose greater structure through explicitworkflow definitions, but tightly couple workflow logic with Python, making agents difficult to maintain and modify. In this paper, we introduce AgentSPEX, anAgent SPecification and EXecution Languagefor specifying LLM-agent workflows with explicitcontrol flowandmodular structure, along with a customizable agent harness. AgentSPEX supports typed steps, branching and loops, parallel execution, reusable submodules, and explicit state management, and these workflows execute within an agent harness that providestool access, asandboxed virtual environment, and support forcheckpointing,verification, andlogging. Furthermore, we provide avisual editorwith synchronized graph and workflow views for authoring and inspection. We include ready-to-use agents for deep research and scientific research, and we evaluate AgentSPEX on 7 benchmarks. Finally, we show through a user study that AgentSPEX provides a more interpretable and accessible workflow-authoring paradigm than a popular existing agent framework.",
      "github_url": "https://github.com/ScaleML/AgentSPEX",
      "org_tag": "UIUC ScaleML Lab",
      "dimension": "action",
      "tech_core": "它把 Agent 从“全靠一段 prompt 临场发挥”改成有类型、有分支、有状态的工作流语言，像写后端流程图而不是写咒语。",
      "value": "适合企业 Agent 编排、研究助手和多步骤自动化，解决 Agent 一复杂就难调试、难审计、难交接维护的问题。",
      "pm_suggestion": "如果你的 Agent 已经进业务流，立刻把 prompt 编排升级成显式工作流 DSL；再继续把逻辑埋在 Python 和提示词里，后面只会越改越脆。"
    },
    {
      "id": 4,
      "title": "Extending One-Step Image Generation from Class Labels to Text via Discriminative Text Representation",
      "url": "https://huggingface.co/papers/2604.18168",
      "likes": 95,
      "date": "2026-04-26",
      "published_date": "Apr 20",
      "abstract": "Few-step generation has been a long-standing goal, with recent one-step generation methods exemplified byMeanFlowachieving remarkable results. Existing research onMeanFlowprimarily focuses onclass-to-image generation. However, an intuitive yet unexplored direction is to extend the condition from fixed class labels to flexible text inputs, enabling richer content creation. Compared to the limited class labels, text conditions pose greater challenges to the model's understanding capability, necessitating the effective integration of powerful text encoders into theMeanFlowframework. Surprisingly, although incorporating text conditions appears straightforward, we find that integrating powerfulLLM-based text encodersusing conventional training strategies results in unsatisfactory performance. To uncover the underlying cause, we conduct detailed analyses and reveal that, due to the extremely limited number ofrefinement stepsin theMeanFlowgeneration, such as only one step, the text feature representations are required to possess sufficiently highdiscriminability. This also explains why discrete and easily distinguishable class features perform well within theMeanFlowframework. Guided by these insights, we leverage a powerful LLM-based text encoder validated to possess the requiredsemantic propertiesand adapt theMeanFlowgeneration process to this framework, resulting in efficienttext-conditioned synthesisfor the first time. Furthermore, we validate our approach on the widely useddiffusion model, demonstrating significantgeneration performance improvements. We hope this work provides a general and practical reference for future research on text-conditionedMeanFlowgeneration. The code is available at https://github.com/AMAP-ML/EMF.",
      "github_url": "https://github.com/AMAP-ML/EMF",
      "org_tag": "AMAP-ML",
      "dimension": "efficiency",
      "tech_core": "它找到了文生图一步出图的关键门槛：文本特征必须足够“可区分”，不然步数一砍到极少，模型根本来不及纠错。",
      "value": "适合低延迟出图、互动生成和边缘端创作，解决一步生成常常只能玩分类标签、碰到自由文本就糊掉的问题。",
      "pm_suggestion": "如果你在做实时生成，把“少步数下文本表征是否够锐利”列成首要验收指标；只盯采样步数，不盯条件表征质量，最后只会得到更快的废图。"
    },
    {
      "id": 5,
      "title": "OneVL: One-Step Latent Reasoning and Planning with Vision-Language Explanation",
      "url": "https://huggingface.co/papers/2604.18486",
      "likes": 84,
      "date": "2026-04-26",
      "published_date": "Apr 20",
      "abstract": "Chain-of-Thought(CoT) reasoning has become a powerful driver oftrajectory predictionin VLA-based autonomous driving, yet itsautoregressive natureimposes a latency cost that is prohibitive for real-time deployment.Latent CoTmethods attempt to close this gap by compressing reasoning into continuous hidden states, but consistently fall short of their explicit counterparts. We suggest that this is due to purely linguistic latent representations compressing a symbolic abstraction of the world, rather than the causal dynamics that actually govern driving. Thus, we present OneVL (One-step latent reasoning and planning with Vision-Language explanations), a unified VLA andWorld Modelframework that routes reasoning through compactlatent tokenssupervised by dualauxiliary decoders. Alongside alanguage decoderthat reconstructs text CoT, we introduce avisual world model decoderthat predicts future-frame tokens, forcing the latent space to internalize the causal dynamics of road geometry, agent motion, and environmental change. Athree-stage training pipelineprogressively aligns these latents with trajectory, language, and visual objectives, ensuring stable joint optimization. At inference, theauxiliary decodersare discarded and alllatent tokensare prefilled in a singleparallel pass, matching the speed of answer-only prediction. Across four benchmarks, OneVL becomes the firstlatent CoTmethod to surpass explicit CoT, delivering state-of-the-art accuracy at answer-only latency, and providing direct evidence that tighter compression, when guided in both language and world-model supervision, produces more generalizable representations than verbose token-by-token reasoning. Project Page: https://xiaomi-embodied-intelligence.github.io/OneVL",
      "github_url": null,
      "org_tag": "Xiaomi Research",
      "dimension": "robotics",
      "tech_core": "它把自动驾驶推理压进一组潜变量里，但用语言解释和未来画面预测双重监督，逼模型学会真正的道路因果，而不是背口头推理。",
      "value": "适合自动驾驶、实时机器人决策和车端部署，解决显式 CoT 准但太慢、隐式推理快但常常掉准度的问题。",
      "pm_suggestion": "如果你在做实时驾驶或机器人规划，把“潜在推理 + 世界模型监督”当主线投入；端上系统没有时间等模型一字一句把思路念完。"
    },
    {
      "id": 6,
      "title": "CoInteract: Physically-Consistent Human-Object Interaction Video Synthesis via Spatially-Structured Co-Generation",
      "url": "https://huggingface.co/papers/2604.19636",
      "likes": 82,
      "date": "2026-04-26",
      "published_date": "Apr 21",
      "abstract": "Synthesizing human--object interaction (HOI) videos has broad practical value in e-commerce, digital advertising, and virtual marketing. However, current diffusion models, despite their photorealistic rendering capability, still frequently fail on (i) the structural stability of sensitive regions such as hands and faces and (ii) physically plausible contact (e.g., avoiding hand--object interpenetration). We present CoInteract, an end-to-end framework for HOI video synthesis conditioned on a person reference image, a product reference image, text prompts, and speech audio. CoInteract introduces two complementary designs embedded into aDiffusion Transformer(DiT) backbone. First, we propose aHuman-Aware Mixture-of-Experts(MoE) that routes tokens to lightweight,region-specialized expertsviaspatially supervised routing, improving fine-grained structural fidelity with minimal parameter overhead. Second, we proposeSpatially-Structured Co-Generation, adual-stream training paradigmthat jointly models anRGB appearance streamand an auxiliaryHOI structure streamto injectinteraction geometry priors. During training, the HOI stream attends to RGB tokens and its supervision regularizes shared backbone weights; at inference, the HOI branch is removed for zero-overhead RGB generation. Experimental results demonstrate that CoInteract significantly outperforms existing methods in structural stability, logical consistency, and interaction realism.",
      "github_url": "https://github.com/luoxyhappy/CoInteract",
      "org_tag": "alibaba-inc",
      "dimension": "multimodal",
      "tech_core": "它专门盯住人货互动视频里最容易翻车的两件事：手脸别崩、接触别穿模，于是额外建了一条结构流去约束动作几何。",
      "value": "适合商品演示、虚拟广告和数字人营销，解决生成视频看着真但一碰商品就不合理、品牌方根本不敢商用的问题。",
      "pm_suggestion": "如果你卖视频生成给品牌客户，先把“物理接触是否可信”做成核心卖点；人和商品一接触就穿帮，这单就签不下来。"
    },
    {
      "id": 7,
      "title": "LLaTiSA: Towards Difficulty-Stratified Time Series Reasoning from Visual Perception to Semantics",
      "url": "https://huggingface.co/papers/2604.17295",
      "likes": 80,
      "date": "2026-04-26",
      "published_date": "Apr 19",
      "abstract": "Comprehensive understanding of time series remains a significant challenge for Large Language Models (LLMs). Current research is hindered by fragmented task definitions and benchmarks with inherent ambiguities, precluding rigorous evaluation and the development of unifiedTime Series ReasoningModels(TSRMs). To bridge this gap, we formalizeTime Series Reasoning(TSR) via a four-level taxonomy of increasing cognitive complexity. We introduce HiTSR, a hierarchicaltime series reasoningdataset comprising 83k samples with diverse task combinations and verifiedChain-of-Thought(CoT) trajectories. Leveraging HiTSR, we propose LLaTiSA, a strongTSRMthat integrates visualized patterns with precision-calibrated numerical tables to enhance the temporal perception ofVision-Language Models(VLMs). Through amulti-stage curriculum fine-tuningstrategy, LLaTiSA achieves superior performance and exhibits robust out-of-distribution generalization across diverse TSR tasks and real-world scenarios. Our code is available at https://github.com/RainingNovember/LLaTiSA.",
      "github_url": "https://github.com/RainingNovember/LLaTiSA",
      "org_tag": "AMAP-ML",
      "dimension": "understanding",
      "tech_core": "它把时间序列推理拆成难度阶梯，再把曲线图和精确数表一起喂给模型，让模型既看趋势也不丢数字细节。",
      "value": "适合金融分析、运维监控和工业预测，解决大模型看时间序列时只会讲大概趋势、但经常忽略关键数值拐点的问题。",
      "pm_suggestion": "如果你在做时序 Copilot，立刻把图形视图和数值表双通道接进去；只给折线图或只给表格，都会让模型判断发虚。"
    },
    {
      "id": 8,
      "title": "Agent-World: Scaling Real-World Environment Synthesis for Evolving General Agent Intelligence",
      "url": "https://huggingface.co/papers/2604.18292",
      "likes": 78,
      "date": "2026-04-26",
      "published_date": "Apr 20",
      "abstract": "Large language models are increasingly expected to serve as general-purpose agents that interact with external, stateful tool environments. TheModel Context Protocol(MCP) and broaderagent skillsoffer a unified interface for connecting agents with scalable real-world services, but training robust agents remains limited by the lack of realistic environments and principled mechanisms for life-long learning. In this paper, we present Agent-World, aself-evolving training arenafor advancing general agent intelligence through scalable environments. Agent-World has two main components: (1)Agentic Environment-Task Discovery, which autonomously explores topic-aligned databases and executable tool ecosystems from thousands of real-world environment themes and synthesizes verifiable tasks with controllable difficulty; and (2)Continuous Self-Evolving Agent Training, which combinesmulti-environment reinforcement learningwith a self-evolving agent arena that automatically identifies capability gaps throughdynamic task synthesisand drives targeted learning, enabling theco-evolution of agent policies and environments. Across 23 challenging agent benchmarks, Agent-World-8B and 14B consistently outperforms strong proprietary models and environment scaling baselines. Further analyses reveal scaling trends in relation to environment diversity and self-evolution rounds, offering insights for building general agent intelligence.",
      "github_url": null,
      "org_tag": "ByteDance Seed",
      "dimension": "action",
      "tech_core": "它不是单纯训一个 Agent，而是先不断造新的真实工具环境和任务，再让 Agent 在这个会自我进化的训练场里持续补短板。",
      "value": "适合通用 Agent、工具使用模型和企业自动化平台，解决 Agent 训练老是在几套固定 benchmark 上刷分、离真实世界越训越远的问题。",
      "pm_suggestion": "如果你在做通用 Agent，把预算优先投到环境扩展和任务生成，不要只盯模型参数；没有足够多样的真环境，Agent 上限很快就撞墙。"
    },
    {
      "id": 9,
      "title": "Elucidating the SNR-t Bias of Diffusion Probabilistic Models",
      "url": "https://huggingface.co/papers/2604.16044",
      "likes": 73,
      "date": "2026-04-26",
      "published_date": "Apr 17",
      "abstract": "Diffusion Probabilistic Modelshave demonstrated remarkable performance across a wide range of generative tasks. However, we have observed that these models often suffer from a Signal-to-Noise Ratio-timestep (SNR-t) bias. This bias refers to the misalignment between the SNR of thedenoising sampleand its corresponding timestep during theinference phase. Specifically, during training, the SNR of a sample is strictly coupled with its timestep. However, this correspondence is disrupted during inference, leading toerror accumulationand impairing thegeneration quality. We provide comprehensive empirical evidence and theoretical analysis to substantiate this phenomenon and propose a simple yet effectivedifferential correctionmethod to mitigate the SNR-t bias. Recognizing that diffusion models typically reconstruct low-frequency componentsbefore focusing on high-frequency details during thereverse denoising process, we decompose samples into variousfrequency componentsand applydifferential correctionto each component individually. Extensive experiments show that our approach significantly improves thegeneration qualityof various diffusion models (IDDPM, ADM, DDIM, A-DPM, EA-DPM, EDM, PFGM++, and FLUX) on datasets of various resolutions with negligible computational overhead. The code is at https://github.com/AMAP-ML/DCW.",
      "github_url": "https://github.com/AMAP-ML/DCW",
      "org_tag": "alibaba-inc",
      "dimension": "efficiency",
      "tech_core": "它发现扩散模型在推理阶段会把“当前该有多少信号”这件事对不齐，于是用分频校正把误差一点点掰回来。",
      "value": "适合出图、视频和编辑模型推理优化，解决很多生成系统模型本身不差，但上线后细节总发虚、质量不稳定的问题。",
      "pm_suggestion": "如果你已经有扩散产品，先补这类低开销推理校正，再考虑换大模型；能白捡质量增益的工程优化必须先吃掉。"
    },
    {
      "id": 10,
      "title": "OpenGame: Open Agentic Coding for Games",
      "url": "https://huggingface.co/papers/2604.18394",
      "likes": 70,
      "date": "2026-04-26",
      "published_date": "Apr 20",
      "abstract": "Game development sits at the intersection of creative design and intricate software engineering, demanding the joint orchestration ofgame engines,real-time loops, and tightly coupled state across many files. WhileLarge Language Models(LLMs) andcode agentsnow solve isolated programming tasks with ease, they consistently stumble when asked to produce a fully playable game from a high-level design, collapsing undercross-file inconsistencies, brokenscene wiring, andlogical incoherence. We bridge this gap with OpenGame, the first open-source agentic framework explicitly designed for end-to-end web game creation. At its core liesGame Skill, a reusable, evolving capability composed of aTemplate Skillthat grows a library of project skeletons from experience and aDebug Skillthat maintains a living protocol of verified fixes - together enabling the agent to scaffold stable architectures and systematically repair integration errors rather than patch isolated syntax bugs. Powering this framework isGameCoder-27B, a code LLM specialized for game engine mastery through a three-stage pipeline ofcontinual pre-training,supervised fine-tuning, andexecution-grounded reinforcement learning. Since verifying interactive playability is fundamentally harder than checking static code, we further introduceOpenGame-Bench, an evaluation pipeline that scores agentic game generation alongBuild Health,Visual Usability, andIntent Alignmentviaheadless browser executionandVLM judging. Across 150 diverse game prompts, OpenGame establishes a new state-of-the-art. We hope OpenGame pushescode agentsbeyond discrete software engineering problems and toward building complex, interactive real-world applications. Our framework will be fully open-sourced.",
      "github_url": "https://github.com/leigest519/OpenGame",
      "org_tag": null,
      "dimension": "action",
      "tech_core": "它给代码 Agent 补上了做游戏最缺的两块肌肉：会搭稳定骨架，也会积累可复用的修 bug 手册，而不是每次都从零乱写。",
      "value": "适合游戏生成、互动应用开发和复杂前端 Agent，解决多文件、强状态、强交互项目一上来就把代码 Agent 弄崩的问题。",
      "pm_suggestion": "如果你想卖“从需求到可运行应用”的 Agent，先从游戏这种高耦合场景练兵；连可玩网页游戏都做不稳，别急着承诺能交付复杂产品。"
    },
    {
      "id": 11,
      "title": "Near-Future Policy Optimization",
      "url": "https://huggingface.co/papers/2604.20733",
      "likes": 63,
      "date": "2026-04-26",
      "published_date": "Apr 22",
      "abstract": "Reinforcement learningwithverifiable rewards(RLVR) has become a core post-training recipe. Introducing suitableoff-policy trajectoriesintoon-policy explorationaccelerates RLVR convergence and raises the performance ceiling, yet finding a source of such trajectories remains the key challenge. Existingmixed-policy methodseither import trajectories from external teachers (high-quality but distributionally far) or replay past training trajectories (close but capped in quality), and neither simultaneously satisfies the strong enough (higher Q , more new knowledge to learn) and close enough (lower V , more readily absorbed) conditions required to maximize theeffective learning signalS = Q/V. We propose Near-FuturePolicy Optimization(NPO), a simple mixed-policy scheme that learns from a policy's own near-future self: a later checkpoint from the same training run is a natural source of auxiliary trajectories that is both stronger than the current policy and closer than any external source, directly balancing trajectory quality against variance cost. We validate NPO through two manual interventions, early-stagebootstrappingand late-stageplateau breakthrough, and further propose AutoNPO,an adaptive variant that automatically triggers interventions fromonline training signalsand selects the guide checkpoint that maximizes S. On Qwen3-VL-8B-Instruct with GRPO, NPO improves average performance from 57.88 to 62.84, and AutoNPO pushes it to 63.15, raising the final performance ceiling while accelerating convergence.",
      "github_url": null,
      "org_tag": null,
      "dimension": "understanding",
      "tech_core": "它让模型向“未来版本的自己”学，而不是硬抄外部老师或反复回看旧答案，等于找到了一个又近又强的陪练。",
      "value": "适合推理模型后训练和持续强化学习，解决外部教师太远学不进、历史轨迹太旧又学不到新东西的两难。",
      "pm_suggestion": "如果你在做 RLVR，立刻把近未来 checkpoint 纳入训练循环；自家模型的下一步往往比外部教师更值得学。"
    },
    {
      "id": 12,
      "title": "DiPO: Disentangled Perplexity Policy Optimization for Fine-grained Exploration-Exploitation Trade-Off",
      "url": "https://huggingface.co/papers/2604.13902",
      "likes": 60,
      "date": "2026-04-26",
      "published_date": "Apr 15",
      "abstract": "Reinforcement Learningwith Verifiable Rewards (RLVR) has catalyzed significant advances in the reasoning capabilities ofLarge Language Models(LLMs). However, effectively managing the exploration and exploitation trade-off remains a critical challenge. In this paper, we fully analyze the exploration and exploitation dilemma of extremely hard and easy samples during the training and propose a new fine-grained trade-off mechanism. Concretely, we introduce aperplexity spacedisentangling strategythat divides the sample space into distinct exploration (high perplexity) and exploitation (low perplexity) subspaces, thereby mining fine-grained samples requiringexploration-exploitation trade-off. Subsequently, we propose abidirectional reward allocationmechanism with a minimum impact on verification rewards to implement perplexity-guided exploration and exploitation, enabling more stablepolicy optimization. Finally, we have evaluated our method on two mainstream tasks:mathematical reasoningandfunction calling, and experimental results demonstrate the superiority of the proposed method, confirming its effectiveness in enhancing LLM performance by fine-grainedexploration-exploitation trade-off.",
      "github_url": null,
      "org_tag": "East China Normal University",
      "dimension": "understanding",
      "tech_core": "它按样本困惑度给训练流量分车道：特别难的题去探索，容易的题去稳扎稳打，不再一锅乱炖。",
      "value": "适合数学推理、工具调用和可验证任务训练，解决 RL 训练里简单题被过度刷、难题又总学不动的资源浪费。",
      "pm_suggestion": "如果你在训推理模型，把样本分层调度做成默认策略；不按难度分配探索预算，训练曲线好看也只是虚胖。"
    },
    {
      "id": 13,
      "title": "Maximal Brain Damage Without Data or Optimization: Disrupting Neural Networks via Sign-Bit Flips",
      "url": "https://huggingface.co/papers/2502.07408",
      "likes": 56,
      "date": "2026-04-26",
      "published_date": "Apr 16",
      "abstract": "Deep Neural Networks(DNNs) can be catastrophically disrupted by flipping only a handful ofparameter bits. We introduceDeep Neural Lesion(DNL), a data-free and optimizationfree method that locates critical parameters, and an enhanced single-pass variant,1P-DNL, that refines this selection with one forward and backward pass on random inputs. We show that this vulnerability spans multiple domains, including image classification,object detection,instance segmentation, and reasoning large language models. In image classification, flipping just twosign bitsinResNet-50onImageNetreduces accuracy by 99.8%. Inobject detectionandinstance segmentation, one or two sign flips in the backbone collapse COCO detection and mask AP forMask R-CNNandYOLOv8-segmodels. Inlanguage modeling, two sign flips into different experts reduceQwen3-30B-A3B-Thinkingfrom 78% to 0% accuracy. We also show that selectively protecting a small fraction of vulnerablesign bitsprovides a practical defense against such attacks.",
      "github_url": "https://github.com/IdoGalil/maximal-brain-damage",
      "org_tag": "NVIDIA",
      "dimension": "safety",
      "tech_core": "它证明很多模型像玻璃心：只要精准翻转极少几个符号位，整套能力就能当场塌掉，而且几乎不需要数据。",
      "value": "适合模型部署安全、边缘设备和推理基础设施，解决大家重视越狱和提示注入，却低估底层权重位翻转攻击的盲区。",
      "pm_suggestion": "如果你管模型基础设施，立刻给关键权重位加保护和完整性校验；这不是学术边角料，而是能直接把线上模型打成废铁的攻击面。"
    },
    {
      "id": 14,
      "title": "Qwen3.5-Omni Technical Report",
      "url": "https://huggingface.co/papers/2604.15804",
      "likes": 52,
      "date": "2026-04-26",
      "published_date": "Apr 17",
      "abstract": "In this work, we present Qwen3.5-Omni, the latest advancement in the Qwen-Omni model family. Representing a significant evolution over its predecessor, Qwen3.5-Omni scales to hundreds of billions of parameters and supports a 256k context length. By leveraging a massive dataset comprising heterogeneous text-vision pairs and over 100 million hours of audio-visual content, the model demonstrates robust omni-modality capabilities. Qwen3.5-Omni-plus achieves SOTA results across 215 audio andaudio-visual understanding, reasoning, and interaction subtasks and benchmarks, surpassing Gemini-3.1 Pro in key audio tasks and matching it in comprehensiveaudio-visual understanding. Architecturally, Qwen3.5-Omni employs aHybrid Attention Mixture-of-Experts(MoE) framework for both Thinker and Talker, enabling efficient long-sequence inference. The model facilitates sophisticated interaction, supporting over 10 hours of audio understanding and 400 seconds of 720P video (at 1 FPS). To address the inherent instability and unnaturalness in streamingspeech synthesis, often caused by encoding efficiency discrepancies between text and speech tokenizers, we introduceARIA.ARIAdynamically aligns text and speech units, significantly enhancing the stability and prosody of conversational speech with minimal latency impact. Furthermore, Qwen3.5-Omni expands linguistic boundaries, supportingmultilingual understandingand speech generation across 10 languages with human-like emotional nuance. Finally, Qwen3.5-Omni exhibits superioraudio-visual groundingcapabilities, generating script-level structured captions with precise temporal synchronization and automated scene segmentation. Remarkably, we observed the emergence of a new capability in omnimodal models: directly performing coding based on audio-visual instructions, which we callAudio-Visual Vibe Coding.",
      "github_url": null,
      "org_tag": null,
      "dimension": "multimodal",
      "tech_core": "它把文本、图像、音频、视频和语音交互揉进一个超大 omnimodal 系统里，重点不是多会考试，而是长时音视频理解和自然实时说话都往前推了一截。",
      "value": "适合智能终端、会议助理、视频分析和语音交互产品，解决过去多模态能力各自分家、长时输入一上来就成本爆炸的问题。",
      "pm_suggestion": "如果你在做端到端助手，把音视频长上下文和自然语音输出放进主 roadmap；下一轮用户竞争会从“能不能看”转向“能不能持续陪伴式交互”。"
    },
    {
      "id": 15,
      "title": "PersonaVLM: Long-Term Personalized Multimodal LLMs",
      "url": "https://huggingface.co/papers/2604.13074",
      "likes": 46,
      "date": "2026-04-26",
      "published_date": "Mar 20",
      "abstract": "Multimodal Large Language Models(MLLMs) serve as daily assistants for millions. However, their ability to generate responses aligned with individual preferences remains limited. Prior approaches enable only static, single-turn personalization through input augmentation or output alignment, and thus fail to capture users' evolving preferences and personality over time (see Fig.1). In this paper, we introduce PersonaVLM, an innovativepersonalized multimodal agent frameworkdesigned forlong-term personalization. It transforms a general-purpose MLLM into a personalized assistant by integrating three key capabilities: (a) Remembering: It proactively extracts and summarizeschronological multimodal memoriesfrom interactions, consolidating them into apersonalized database. (b) Reasoning: It conductsmulti-turn reasoningby retrieving and integrating relevant memories from the database. (c)Response Alignment: It infers the user's evolving personality throughout long-term interactions to ensure outputs remain aligned with their unique characteristics. For evaluation, we establish Persona-MME, a comprehensive benchmark comprising over 2,000 curated interaction cases, designed to assess long-term MLLM personalization across seven key aspects and 14 fine-grained tasks. Extensive experiments validate our method's effectiveness, improving the baseline by 22.4% (Persona-MME) and 9.8% (PERSONAMEM) under a 128k context, while outperforming GPT-4o by 5.2% and 2.0%, respectively. Project page: https://PersonaVLM.github.io.",
      "github_url": "https://github.com/MiG-NJU/PersonaVLM",
      "org_tag": "Nanjing University",
      "dimension": "understanding",
      "tech_core": "它把个性化做成长期记忆系统：持续记住用户的多模态偏好、在需要时检索、再把回应重新对齐到这个人。",
      "value": "适合长期陪伴助手、内容推荐和个人工作台，解决很多助手聊一轮像认识你，下一轮又像重新失忆的断裂体验。",
      "pm_suggestion": "如果你做个人助手，立刻把“长期个性记忆”从彩蛋升成底层能力；没有持续记忆，就很难把用户留成订阅。"
    },
    {
      "id": 16,
      "title": "DR-Venus: Towards Frontier Edge-Scale Deep Research Agents with Only 10K Open Data",
      "url": "https://huggingface.co/papers/2604.19859",
      "likes": 45,
      "date": "2026-04-26",
      "published_date": "Apr 21",
      "abstract": "Edge-scaledeep research agents based on small language models are attractive for real-world deployment due to their advantages in cost, latency, and privacy. In this work, we study how to train a strong smalldeep research agentunder limited open-data by improving both data quality and data utilization. We present DR-Venus, a frontier 4Bdeep research agentforedge-scale deployment, built entirely on open data. Our training recipe consists of two stages. In the first stage, we useagentic supervised fine-tuning(SFT) to establish basic agentic capability, combining strict data cleaning with resampling of long-horizon trajectories to improve data quality and utilization. In the second stage, we applyagentic reinforcement learning(RL) to further improve execution reliability on long-horizon deep research tasks. To make RL effective for small agents in this setting, we build on IGPO and designturn-level rewardsbased oninformation gainandformat-aware regularization, thereby enhancing supervision density and turn-level credit assignment. Built entirely on roughly 10K open-data, DR-Venus-4B significantly outperforms prior agentic models under 9B parameters on multiple deep research benchmarks, while also narrowing the gap to much larger 30B-class systems. Our further analysis shows that 4B agents already possess surprisingly strong performance potential, highlighting both the deployment promise of small models and the value oftest-time scalingin this setting. We release our models, code, and key recipes to support reproducible research on edge-scaledeep research agents.",
      "github_url": "https://github.com/inclusionAI/DR-Venus",
      "org_tag": "inclusionAI",
      "dimension": "action",
      "tech_core": "它证明深度研究 Agent 不一定要大模型大数据，4B 小模型只要把轨迹清洗、长任务利用率和回合级奖励做好，也能打出很强执行力。",
      "value": "适合本地研究助手、企业私有部署和低成本知识工作流，解决深度研究产品一上来就要高算力、高延迟、高隐私风险的问题。",
      "pm_suggestion": "如果你在做研究 Agent，本季度就该启动小模型版本；边缘可部署和隐私友好会是企业采购里非常硬的加分项。"
    },
    {
      "id": 17,
      "title": "SmartPhotoCrafter: Unified Reasoning, Generation and Optimization for Automatic Photographic Image Editing",
      "url": "https://huggingface.co/papers/2604.19587",
      "likes": 43,
      "date": "2026-04-26",
      "published_date": "Apr 21",
      "abstract": "Traditional photographic image editing typically requires users to possess sufficient aesthetic understanding to provide appropriate instructions for adjusting image quality and camera parameters. However, this paradigm relies on explicit human instruction of aesthetic intent, which is often ambiguous, incomplete, or inaccessible to non-expert users. In this work, we propose SmartPhotoCrafter, an automatic photographic image editing method which formulates image editing as a tightly coupled reasoning-to-generation process. The proposed model first performsimage quality comprehensionand identifies deficiencies by theImage Critic module, and then thePhotographic Artist modulerealizes targeted edits to enhance image appeal, eliminating the need for explicit human instructions. Amulti-stage training pipelineis adopted: (i)Foundation pretrainingto establish basic aesthetic understanding and editing capabilities, (ii)Adaptation with reasoning-guided multi-edit supervisionto incorporate richsemantic guidance, and (iii) Coordinated reasoning-to generation reinforcement learning to jointly optimize reasoning and generation. During training, SmartPhotoCrafter emphasizesphoto-realistic image generation, while supporting bothimage restorationandretouching taskswith consistent adherence to color- and tone-related semantics. We also construct a stage-specific dataset, which progressively builds reasoning and controllable generation, effective cross-module collaboration, and ultimately high-quality photographic enhancement. Experiments demonstrate that SmartPhotoCrafter outperforms existing generative models on the task of automatic photographic enhancement, achieving photo-realistic results while exhibiting higher tonal sensitivity to retouching instructions. Project page: https://github.com/vivoCameraResearch/SmartPhotoCrafter.",
      "github_url": "https://github.com/vivoCameraResearch/SmartPhotoCrafter",
      "org_tag": null,
      "dimension": "multimodal",
      "tech_core": "它把修图改成“先批改、再动手”的闭环：先判断照片差在哪，再按审美和摄影语义精准下刀，而不是让用户自己瞎描述。",
      "value": "适合相册增强、手机影像和内容创作工具，解决普通用户不会下修图指令、结果只能在滤镜和滑杆里盲调的问题。",
      "pm_suggestion": "如果你做影像产品，把自动批改式修图做成默认入口；大众用户要的是一键变好看，不是学习 Lightroom。"
    },
    {
      "id": 18,
      "title": "MultiWorld: Scalable Multi-Agent Multi-View Video World Models",
      "url": "https://huggingface.co/papers/2604.18564",
      "likes": 41,
      "date": "2026-04-26",
      "published_date": "Apr 20",
      "abstract": "Video world modelshave achieved remarkable success in simulating environmental dynamics in response to actions by users or agents. They are modeled asaction-conditioned video generationmodels that take historical frames and current actions as input to predict future frames. Yet, most existing approaches are limited to single-agent scenarios and fail to capture the complex interactions inherent in real-worldmulti-agent systems. We present MultiWorld, a unified framework for multi-agent multi-view world modeling that enables accurate control of multiple agents while maintainingmulti-view consistency. We introduce theMulti-Agent Condition Moduleto achieve precise multi-agent controllability, and theGlobal State Encoderto ensure coherent observations across different views. MultiWorld supports flexible scaling of agent and view counts, and synthesizes different views in parallel for high efficiency. Experiments on multi-player game environments and multi-robot manipulation tasks demonstrate that MultiWorld outperforms baselines in video fidelity, action-following ability, andmulti-view consistency. Project page: https://multi-world.github.io/",
      "github_url": "https://github.com/CIntellifusion/MultiWorld",
      "org_tag": "The University of Hong Kong",
      "dimension": "robotics",
      "tech_core": "它把世界模型从“单人单视角 demo”推进到多角色、多视角同时一致，开始逼近真实游戏和多机器人协作环境。",
      "value": "适合多机器人仿真、多人游戏 AI 和复杂场景推演，解决过去世界模型一旦角色多起来、视角切起来就彼此打架的问题。",
      "pm_suggestion": "如果你在做仿真平台，优先投资多体一致性，不要再满足于单主体效果图；真正能卖给训练和控制团队的是可协同的世界。"
    },
    {
      "id": 19,
      "title": "EasyVideoR1: Easier RL for Video Understanding",
      "url": "https://huggingface.co/papers/2604.16893",
      "likes": 39,
      "date": "2026-04-26",
      "published_date": "Apr 18",
      "abstract": "Reinforcement learning from verifiable rewards(RLVR) has demonstrated remarkable effectiveness in improving the reasoning capabilities of large language models. As models evolve into natively multimodal architectures, extending RLVR tovideo understandingbecomes increasingly important yet remains largely unexplored, due to the diversity of video task types, the computational overhead of repeatedly decoding and preprocessing high-dimensional visual inputs, and the difficulty of reproducible evaluation across numerous sensitive hyperparameters. Existing open-source RL training frameworks provide solid infrastructure for text and image scenarios but lack systematic optimizations tailored for video modality. In this work, we present EasyVideoR1, a complete and efficient reinforcement learning framework specifically designed for traininglarge vision-language modelsonvideo understandingtasks. EasyVideoR1 makes the following contributions: (1) a full video RL training pipeline withoffline preprocessingandtensor cachingthat eliminates redundant video decoding and yields a 1.47 times throughput improvement; (2) a comprehensive, task-awarereward systemcovering 11 distinct video and image problem types with unified routing and modular extension; (3) amixed offline-online data trainingparadigm that combines curated high-quality trajectories with on-policy exploration, benefiting the learning of more challenging tasks; (4)joint image-video trainingwith independently configurable pixel budgets, allowing the two modalities to mutually reinforce each other; and (5) anasynchronous multi-benchmark evaluationframework covering 22 mainstreamvideo understandingbenchmarks, with reproduced accuracy closely aligned with officially reported scores.",
      "github_url": "https://github.com/cyuQ1n/EasyVideoR1",
      "org_tag": null,
      "dimension": "multimodal",
      "tech_core": "它把视频理解的 RL 训练从零件堆成整车：视频缓存、任务化奖励、图像视频联合训练和异步评测全都配齐。",
      "value": "适合视频分析、监控理解和多模态推理训练，解决视频 RL 又贵又慢、实验难复现、每次训练都像手工搭棚的问题。",
      "pm_suggestion": "如果你在做视频理解，不要直接照搬图像 RL 框架，立刻单列视频训练基础设施；少一次重复解码，就是实打实的训练预算。"
    },
    {
      "id": 20,
      "title": "AnyRecon: Arbitrary-View 3D Reconstruction with Video Diffusion Model",
      "url": "https://huggingface.co/papers/2604.19747",
      "likes": 37,
      "date": "2026-04-26",
      "published_date": "Apr 21",
      "abstract": "Sparse-view 3D reconstructionis essential for modeling scenes from casual captures, but remain challenging for non-generative reconstruction. Existing diffusion-based approaches mitigates this issues by synthesizing novel views, but they often condition on only one or two capture frames, which restricts geometric consistency and limits scalability to large or diverse scenes. We propose AnyRecon, a scalable framework for reconstruction from arbitrary and unordered sparse inputs that preserves explicit geometric control while supporting flexible conditioning cardinality. To support long-range conditioning, our method constructs a persistentglobal scene memoryvia a prependedcapture view cache, and removestemporal compressionto maintain frame-level correspondence under large viewpoint changes. Beyond better generative model, we also find that the interplay between generation and reconstruction is crucial for large-scale 3D scenes. Thus, we introduce ageometry-aware conditioningstrategy that couples generation and reconstruction through an explicit3D geometric memoryand geometry-driven capture-view retrieval. To ensure efficiency, we combine 4-stepdiffusion distillationwithcontext-window sparse attentionto reduce quadratic complexity. Extensive experiments demonstrate robust and scalable reconstruction across irregular inputs, large viewpoint gaps, and long trajectories.",
      "github_url": "https://github.com/OpenImagingLab/AnyRecon",
      "org_tag": null,
      "dimension": "multimodal",
      "tech_core": "它让 3D 重建不再依赖固定顺序和少量视角，而是给场景建长期记忆，再用几何感知检索把任意稀疏输入拼成更稳的世界。",
      "value": "适合空间扫描、数字孪生和内容采集，解决用户随手拍几张杂乱照片时，传统重建要么对不上几何、要么根本扩不大的问题。",
      "pm_suggestion": "如果你做 3D 采集产品，优先支持“任意顺序、任意数量、缺帧也能重建”的输入体验；真实用户不会按你的理想采集流程来拍。"
    }
  ],
  "opportunities": {
    "strategies": [
      {
        "icon": "💰",
        "title": "可交付的行业 Agent 开始长出真收入",
        "type": "cashcow",
        "action": "把资源集中到能被流程化验收的 Agent：工作流 DSL、深度研究、小模型部署、复杂代码生产。现在真正能签单的不是万能 Agent，而是能在明确任务边界里稳定干活的专用 Agent。",
        "relatedPapers": [3, 8, 10, 16]
      },
      {
        "icon": "🏋️",
        "title": "生成系统进入工程优化收割期",
        "type": "efficiency",
        "action": "别只盯更大的底模，马上梳理推理链路里的低垂果子：少步生成、扩散校正、缓存、蒸馏、量化。未来半年，谁先把成本和延迟打下来，谁就先把生成能力变成可持续业务。",
        "relatedPapers": [4, 9, 11, 19, 20]
      },
      {
        "icon": "🌊",
        "title": "多模态主战场从“能生成”切到“能批改、能保持一致”",
        "type": "blueocean",
        "action": "下一代创作产品别再停留在一次性出图出视频，要围绕参考素材理解、结果批改、局部返工和跨模态一致性做工作台。谁能接管整条创作闭环，谁就能吃掉创作者的主界面。",
        "relatedPapers": [1, 2, 6, 14, 17]
      }
    ],
    "newProducts": [
      {
        "icon": "🆕",
        "title": "商拍级 AI 素材工厂",
        "description": "把虚拟试衣、人货互动视频、自动修图和统一多模态生成串成一条生产线。品牌只给商品图、模特图和脚本，系统直接产出可投放的整套静态与动态素材。",
        "scenes": ["电商大促素材", "品牌广告投放", "达人代运营内容生产"],
        "relatedPapers": [1, 2, 6, 17]
      },
      {
        "icon": "🆕",
        "title": "边缘研究 Agent 工作站",
        "description": "本地或私有云运行的小模型深度研究助手，带显式工作流、可审计轨迹和持续记忆。它不是聊天机器人，而是企业里的轻量研究员。",
        "scenes": ["企业情报研究", "投研辅助", "隐私敏感知识检索"],
        "relatedPapers": [3, 15, 16]
      },
      {
        "icon": "🆕",
        "title": "多机器人世界模拟台",
        "description": "用多主体多视角世界模型生成协作环境，再接自动驾驶或机器人规划模块做闭环测试。它长得像仿真平台，但核心卖点是能大规模自动造复杂协作场景。",
        "scenes": ["多机器人协作训练", "自动驾驶交互推演", "游戏 NPC 群体行为测试"],
        "relatedPapers": [5, 18, 20]
      },
      {
        "icon": "🆕",
        "title": "生成质量总监",
        "description": "给图像、视频、音频生成系统外挂一个会批改的质量层：自动指出哪里不对、改写提示词、安排局部返工，并记录每次修正是如何提升成片率的。",
        "scenes": ["设计团队协作", "UGC 创作平台", "企业生成内容审核返工"],
        "relatedPapers": [2, 9, 17, 19]
      }
    ]
  }
};
