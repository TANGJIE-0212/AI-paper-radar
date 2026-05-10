// AI Paper Radar — Weekly Deep Analysis
// Auto-generated. Do not edit by hand.
const PAPER_DATA = {
  "week": "2026-W19",
  "dateRange": "2026-05-03 to 2026-05-09",
  "fetchedAt": "",
  "dimensions": {
    "understanding": {
      "label": "🧠 理解推理",
      "count": 3
    },
    "action": {
      "label": "🎯 决策行动",
      "count": 7
    },
    "multimodal": {
      "label": "👁️ 多模态",
      "count": 4
    },
    "efficiency": {
      "label": "⚡️ 效率工程",
      "count": 0
    },
    "safety": {
      "label": "🛡️ 安全对齐",
      "count": 2
    },
    "robotics": {
      "label": "🤖 具身智能",
      "count": 4
    }
  },
  "papers": [
    {
      "id": 1,
      "title": "MolmoAct2: Action Reasoning Models for Real-world Deployment",
      "url": "https://huggingface.co/papers/2605.02881",
      "likes": 266,
      "date": "2026-05-10",
      "published_date": "May 4",
      "abstract": "Vision-Language-Action (VLA) models aim to provide a single generalist controller for robots, but today's systems fall short on the criteria that matter for real-world deployment. Frontier models are closed, open-weight alternatives are tied to expensive hardware, reasoning-augmented policies pay prohibitive latency for their grounding, and fine-tuned success rates remain below the threshold for dependable use. We present MolmoAct2, a fully open action reasoning model built for practical deployment, advancing its predecessor along five axes. We introduce MolmoER, aVLM backbonespecialized for spatial andembodied reasoning, trained on a 3.3M-sample corpus with a specialize-then-rehearse recipe. We release three new datasets spanning low-to-medium cost platforms, including MolmoAct2-BimanualYAM, 720 hours of teleoperated bimanual trajectories that constitute the largest open bimanual dataset to date, together with quality-filtered Franka (DROID) and SO100/101 subsets. We provide OpenFAST, an open-weight, open-dataaction tokenizertrained on millions of trajectories across five embodiments. We redesign the architecture to graft aflow-matchingcontinuous-action expertonto adiscrete-token VLMvia per-layerKV-cache conditioning. Finally, we propose MolmoThink, anadaptive-depth reasoningvariant that re-predicts depth tokens only for scene regions that change between timesteps, retaininggeometric groundingat a fraction of prior latency. In the most extensive empirical study of any open VLA to date, spanning 7 simulation and real-world benchmarks, MolmoAct2 outperforms strong baselines including Pi-05, while MolmoER surpasses GPT-5 and Gemini Robotics ER-1.5 across 13 embodied-reasoning benchmarks. We release model weights, training code, and complete training data. Project page: https://allenai.org/blog/molmoact2",
      "github_url": "https://github.com/allenai/molmoact2",
      "org_tag": "Ai2",
      "dimension": "robotics",
      "lede": "全开源具身大脑，反超 GPT-5",
      "tech_core": "一个全开源的机器人「大脑」——同一个模型既能看场景、又能理解指令、又能输出动作；新版还加了个会偷懒的小技巧：场景没变就别重算空间深度，只盯着动了的部分看。",
      "value": "过去开源 VLA 要么慢、要么贵硬件、要么效果不到能用线。MolmoAct2 把权重、数据、训练代码全开，还在 13 个具身推理基准上反超了 GPT-5 和 Gemini Robotics ER-1.5。给做机器人创业、家庭服务机器人的团队第一次有了「真能上车」的开源底座。",
      "pm_suggestion": "如果你在做机器人/具身相关产品，立刻把它当首选 baseline 评估，比闭源 Pi-05、GR00T 都便宜可控；非机器人团队也值得跟一眼——「场景未变就不重算」这个思路可以复用到任何视觉 Agent 里省 token。"
    },
    {
      "id": 2,
      "title": "From Context to Skills: Can Language Models Learn from Context Skillfully?",
      "url": "https://huggingface.co/papers/2604.27660",
      "likes": 145,
      "date": "2026-05-10",
      "published_date": "May 3",
      "abstract": "Many real-world tasks requirelanguage models(LMs) to reason over complex contexts that exceed their parametric knowledge. This calls forcontext learning, where LMs directly learn relevant knowledge from the given context. An intuitive solution is inference-timeskill augmentation: extracting the rules and procedures from context into natural-language skills. However, constructing such skills forcontext learningscenarios faces two challenges: the prohibitive cost of manual skill annotation for long, technically dense contexts, and the lack of external feedback for automated skill construction. In this paper, we propose Ctx2Skill, a self-evolving framework that autonomously discovers, refines, and selects context-specific skills without human supervision or external feedback. At its core, amulti-agent self-playloop has aChallengerthat generates probing tasks and rubrics, aReasonerthat attempts to solve them guided by an evolving skill set, and a neutralJudgethat provides binary feedback. Crucially, both theChallengerand theReasonerevolve through accumulated skills: dedicated Proposer and Generator agents analyze failure cases and synthesize them into targeted skill updates for both sides, enabling automated skill discovery and refinement. To preventadversarial collapsecaused by increasingly extreme task generation and over-specialized skill accumulation, we further introduce aCross-time Replaymechanism that identifies the skill set achieving the best balance across representative cases for theReasonerside, ensuring robust and generalizable skill evolution. The resulting skills can be plugged into any language model to obtain bettercontext learningcapability. Evaluated on fourcontext learningtasks fromCL-bench, Ctx2Skill consistently improves solving rates across backbone models.",
      "github_url": "https://github.com/S1s-Z/Ctx2Skill",
      "org_tag": null,
      "dimension": "understanding",
      "lede": "Agent 自学自考，无需人工标注",
      "tech_core": "教 LLM「自己出题考自己」——一个 Agent 出难题、一个 Agent 答题、第三个 Agent 当裁判，答错的地方反过来变成新「技能」存到知识库，下次遇到类似场景直接调用。整个过程不用人标注。",
      "value": "过去在长上下文里塞满公司文档让模型现学，效果不稳。这个框架自动从语料里抽出「规则+解题套路」当 skill 注入，做企业 RAG/客服时可以让任何 LLM 在你的私域内容上变聪明，不用微调。",
      "pm_suggestion": "做 B 端 RAG 的团队关注跟进——这是 RAG 的下一站：从「检索片段」升级到「检索可复用的解法」。可以先在客服场景做小流量 A/B。"
    },
    {
      "id": 3,
      "title": "Stream-R1: Reliability-Perplexity Aware Reward Distillation for Streaming Video Generation",
      "url": "https://huggingface.co/papers/2605.03849",
      "likes": 117,
      "date": "2026-05-10",
      "published_date": "May 5",
      "abstract": "Distillation-based acceleration has become foundational for making autoregressive streaming video diffusion models practical, withdistribution matching distillation(DMD) as the de facto choice. Existing methods, however, train the student to match the teacher's output indiscriminately, treating everyrollout, frame, and pixel as equally reliable supervision. We argue that this caps distilled quality, since it overlooks two complementary axes of variance in DMD supervision: Inter-Reliability across studentrollouts whose supervision varies in reliability, and Intra-Perplexity across spatial regions and temporal frames that contribute unequally to where quality can still be improved. The objective thus conflates two questions under a uniform weight: whether to learn from eachrollout, and where to concentrate optimization within it. To address this, we propose Stream-R1, a Reliability-Perplexity Aware Reward Distillation framework that adaptively reweights thedistillation objectiveat bothrolloutandspatiotemporal-elementlevels through a single sharedreward-guided mechanism. At the Inter-Reliability level, Stream-R1 rescales eachrollout's loss by an exponential of a pretrainedvideo reward score, so thatrollouts with reliable supervision dominate optimization. At the Intra-Perplexity level, it back-propagates the same reward model to extract per-pixelgradient saliency, which is factored into spatial and temporal weights that concentrate optimization pressure on regions and frames where refinement yields the largest expected gain. An adaptive balancing mechanism prevents any single quality axis from dominating acrossvisual quality,motion quality, andtext alignment. Stream-R1 attains consistent improvements on all three dimensions over distillation baselines on standard streaming video generation benchmarks, without architectural modification or additional inference cost.",
      "github_url": "https://github.com/FrameX-AI/Stream-R1",
      "org_tag": "FrameX-AI",
      "dimension": "multimodal",
      "lede": "流式视频生成的精准蒸馏术",
      "tech_core": "流式视频生成的「重点辅导」加速法——蒸馏小模型时不再每帧都同等学，而是哪些片段是好学生（高奖励）就多学，哪些像素更重要（梯度大）就重点关注，相当于针对薄弱区精准补课。",
      "value": "实时视频生成（直播虚拟人、游戏过场、生成式广告）一直卡在「快但糊」或「清晰但慢」。Stream-R1 不动架构、不增推理成本，三个维度一起涨。",
      "pm_suggestion": "做视频生成 SaaS 的，立刻把这个加进蒸馏管线，几乎零成本提质；做实时虚拟人的，关注但暂不押注——还需要看长序列稳定性。"
    },
    {
      "id": 4,
      "title": "RLDX-1 Technical Report",
      "url": "https://huggingface.co/papers/2605.03269",
      "likes": 101,
      "date": "2026-05-10",
      "published_date": "May 5",
      "abstract": "WhileVision-Language-Action models(VLAs) have shown remarkable progress toward human-like generalist robotic policies through the versatile intelligence (i.e. broad scene understanding and language-conditioned generalization) inherited from pre-trained Vision-Language Models, they still struggle with complexreal-world tasksrequiring broader functional capabilities (e.g. motion awareness, memory-aware decision making, and physical sensing). To address this, we introduce RLDX-1, a general-purpose robotic policy fordexterous manipulationbuilt on theMulti-Stream Action Transformer(MSAT), an architecture that unifies these capabilities by integrating heterogeneous modalities through modality-specific streams withcross-modal joint self-attention. RLDX-1 further combines this architecture with system-level design choices, including synthesizing training data for rare manipulation scenarios, learning procedures specialized for human-like manipulation, and inference optimizations forreal-time deployment. Through empirical evaluation, we show that RLDX-1 consistently outperforms recent frontier VLAs (e.g. π_{0.5} and GR00T N1.6) across bothsimulation benchmarksandreal-world tasksthat require broad functional capabilities beyond general versatility. In particular, RLDX-1 shows superiority in ALLEX humanoid tasks by achieving success rates of 86.8% while π_{0.5} and GR00T N1.6 achieve around 40%, highlighting the ability of RLDX-1 to control a high-DoFhumanoid robotunder diverse functional demands. Together, these results position RLDX-1 as a promising step toward reliable VLAs for complex, contact-rich, and dynamic real-worlddexterous manipulation.",
      "github_url": "https://github.com/RLWRLD/RLDX-1",
      "org_tag": "RLWRLD",
      "dimension": "robotics",
      "lede": "灵巧手操控首次跨过工业线",
      "tech_core": "为灵巧手做的「多模态融合 Transformer」——把视觉、语言、触觉、本体感这些不同流的信号用专属通道处理，再在中间层互相通气，更接近人类大脑的协作模式。",
      "value": "在 ALLEX 类人机器人任务上 86.8% 成功率（对手 π_{0.5}/GR00T N1.6 只有 ~40%），意味着接触密集型操作（拆包、装配、家务）首次跨过工业可用门槛。",
      "pm_suggestion": "如果你在做工业机械臂或家用机器人，这是一个比 π 系列更值得跟踪的开源方案；做仿真平台的可以把 RLDX-1 当样板模型集成进去。"
    },
    {
      "id": 5,
      "title": "ARIS: Autonomous Research via Adversarial Multi-Agent Collaboration",
      "url": "https://huggingface.co/papers/2605.03042",
      "likes": 99,
      "date": "2026-05-10",
      "published_date": "May 4",
      "abstract": "This report describes ARIS (Auto-Research-in-sleep), an open-sourceresearch harnessfor autonomous research, including its architecture, assurance mechanisms, and early deployment experience. The performance ofagent systemsbuilt onLLMsdepends on both themodel weightsand the harness around them, which governs what information to store, retrieve, and present to the model. For long-horizon research workflows, the central failure mode is not a visible breakdown but a plausible unsupported success: a long-running agent can produce claims whose evidential support is incomplete, misreported, or silently inherited from the executor's framing. Therefore, we present ARIS as aresearch harnessthat coordinates machine-learning research workflows throughcross-model adversarial collaborationas a default configuration: anexecutor modeldrives forward progress while a reviewer from a different model family is recommended to critique intermediate artifacts and request revisions. ARIS has three architectural layers. The execution layer provides more than 65 reusableMarkdown-defined skills, model integrations viaMCP, apersistent research wikifor iterative reuse of prior findings, anddeterministic figure generation. The orchestration layer coordinates fiveend-to-end workflowswithadjustable effort settingsandconfigurable routingtoreviewer models. The assurance layer includes a three-stage process for checking whether experimental claims are supported by evidence:integrity verification,result-to-claim mapping, andclaim auditingthat cross-checks manuscript statements against the claim ledger and raw evidence, as well as a five-passscientific-editing pipeline,mathematical-proof checks, andvisual inspectionof the rendered PDF. A prototype self-improvement loop records research traces and proposes harness improvements that are adopted only after reviewer approval.",
      "github_url": "https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep",
      "org_tag": "Shanghai Jiao Tong University",
      "dimension": "action",
      "lede": "AI 写论文也要双盲审稿",
      "tech_core": "让 AI 做研究不再「编故事」——核心思路是「双模型互查」：一个模型推进实验，另一个不同家族模型当审稿人挑刺；再加上证据-结论强校验，避免长流程下不知不觉造假。",
      "value": "目前 Auto-Researcher 类产品最大的痛点不是跑不动，而是跑出来的结论不可信。ARIS 用工程手段强约束证据链，把「自动写论文」从玩具推向能交付。",
      "pm_suggestion": "做 AI Researcher / 自动数据分析产品的，立刻参考它的「assurance layer」三段式（完整性→映射→审计），这是产品化必备护栏；可作为收费 SaaS 的差异化卖点。"
    },
    {
      "id": 6,
      "title": "Stream-T1: Test-Time Scaling for Streaming Video Generation",
      "url": "https://huggingface.co/papers/2605.04461",
      "likes": 98,
      "date": "2026-05-10",
      "published_date": "May 6",
      "abstract": "WhileTest-Time Scaling(TTS) offers a promising direction to enhancevideo generationwithout the surging costs of training, current test-timevideo generationmethods based ondiffusion modelssuffer from exorbitant candidate exploration costs and lacktemporal guidance. To address these structural bottlenecks, we propose shifting the focus tostreaming video generation. We identify that its chunk-level synthesis and fewdenoising stepsare intrinsically suited for TTS, significantly lowering computational overhead while enabling fine-grained temporal control. Driven by this insight, we introduced Stream-T1, a pioneering comprehensive TTS framework exclusively tailored forstreaming video generation. Specifically, Stream-T1 is composed of three units: (1) Stream -Scaled Noise Propagation, which actively refines the initiallatent noiseof the generating chunk using historically proven, high-quality previous chunk noise, effectively establishestemporal dependencyand utilizing the historicalGaussian priorto guide the current generation; (2) Stream -ScaledReward Pruning, which comprehensively evaluates generated candidates to strike an optimal balance between local spatial aesthetics and global temporal coherence by integrating immediate short-term assessments with sliding-window-based long-term evaluations; (3) Stream-ScaledMemory Sinking, which dynamically routes the context evicted fromKV-cacheinto distinct updating pathways guided by the reward feedback, ensuring that previously generated visual information effectively anchors and guides the subsequent video stream. Evaluated on both 5s and 30s comprehensive video benchmarks, Stream-T1 demonstrates profound superiority, significantly improving temporal consistency, motion smoothness, and frame-level visual quality.",
      "github_url": "https://github.com/FrameX-AI/Stream-T1",
      "org_tag": "FrameX-AI",
      "dimension": "multimodal",
      "lede": "视频生成的考前刷题机制",
      "tech_core": "视频生成的「考前刷题」——生成时多采几个候选画面，再用奖励模型筛、用记忆机制把好结果传给下一段，相当于让模型考完一道题再做下一道，连贯性大涨。",
      "value": "对长视频（30 秒以上）尤其重要：物体不再瞬移、镜头不再断片。给广告、短剧、AI 影视一个直接可用的质量提升组件。",
      "pm_suggestion": "如果你在做 AI 短剧/广告生成，立刻把它和 Stream-R1 一起接入；这两个组合起来基本是 2026 流式视频的工程标配。"
    },
    {
      "id": 7,
      "title": "OpenSearch-VL: An Open Recipe for Frontier Multimodal Search Agents",
      "url": "https://huggingface.co/papers/2605.05185",
      "likes": 92,
      "date": "2026-05-10",
      "published_date": "May 6",
      "abstract": "Deep search has become a crucial capability for frontier multimodal agents, enabling models to solve complex questions through active search, evidence verification, and multi-step reasoning. Despite rapid progress, top-tiermultimodal search agentsremain difficult to reproduce, largely due to the absence of open high-quality training data, transparent trajectory synthesis pipelines, or detailed training recipes. To this end, we introduce OpenSearch-VL, a fully open-source recipe for training frontier multimodal deep search agents withagentic reinforcement learning. First, we curated a dedicated pipeline to construct high-quality training data throughWikipedia path sampling,fuzzy entity rewriting, andsource-anchor visual grounding, which jointly reduce shortcuts and one-step retrieval collapse. Based on this pipeline, we curate two training datasets, SearchVL-SFT-36k forSFTand SearchVL-RL-8k forRL. Besides, we design a diversetool environmentthat unifies text search, image search,OCR,cropping,sharpening,super-resolution, andperspective correction, enabling agents to combine active perception with external knowledge acquisition. Finally, we propose a multi-turn fatal-awareGRPOtraining algorithm that handles cascading tool failures by masking post-failure tokens while preserving useful pre-failure reasoning through one-sidedadvantage clamping. Built on this recipe, OpenSearch-VL delivers substantial performance gains, with over 10-point average improvements across seven benchmarks, and achieves results comparable to proprietary commercial models on several tasks. We will release all data, code, and models to support open research on multimodal deep search agents.",
      "github_url": "https://github.com/shawn0728/OpenSearch-VL",
      "org_tag": "Tencent Hunyuan",
      "dimension": "action",
      "lede": "开源版图文搜索 Agent 全配方",
      "tech_core": "开源版「图文搜索 Agent」全套配方——从数据合成（怎么造高质量训练样本）、工具栈（OCR、图搜、剪裁、超分一应俱全）到强化学习（带容错的 GRPO）全公开。",
      "value": "过去想做能联网+看图+多步推理的 Agent 必须用 Perplexity/SearchGPT 这类闭源接口。OpenSearch-VL 直接把训练-推理整套搬上桌，平均涨 10 分追上商业产品。",
      "pm_suggestion": "做行业搜索/法律/医疗资料 Agent 的团队立刻评估——开源闭环让你能在私域知识上彻底定制；个人开发者直接 fork 当基础。"
    },
    {
      "id": 8,
      "title": "UniVidX: A Unified Multimodal Framework for Versatile Video Generation via Diffusion Priors",
      "url": "https://huggingface.co/papers/2605.00658",
      "likes": 80,
      "date": "2026-05-10",
      "published_date": "May 1",
      "abstract": "Recent progress has shown thatvideo diffusion models(VDMs) can be repurposed for diversemultimodal graphics tasks. However, existing methods often train separate models for each problem setting, which fixes the input-output mapping and limits the modeling of correlations across modalities. We present UniVidX, a unified multimodal framework that leverages VDM priors for versatilevideo generation. UniVidX formulates pixel-aligned tasks asconditional generationin a shared multimodal space, adapts tomodality-specific distributionswhile preserving the backbone's native priors, and promotes cross-modal consistency during synthesis. It is built on three key designs.Stochastic Condition Masking(SCM) randomly partitions modalities into clean conditions and noisy targets during training, enabling omni-directionalconditional generationinstead of fixed mappings.Decoupled Gated LoRA(DGL) introduces per-modality LoRAs that are activated when a modality serves as the generation target, preserving the strong priors of the VDM.Cross-Modal Self-Attention(CMSA) shares keys and values across modalities while keeping modality-specific queries, facilitating information exchange and inter-modal alignment. We instantiate UniVidX in two domains: UniVid-Intrinsic, for RGB videos and intrinsic maps including albedo, irradiance, and normal; and UniVid-Alpha, for blended RGB videos and their constituent RGBA layers. Experiments show that both models achieve performance competitive with state-of-the-art methods across distinct tasks and generalize robustly to in-the-wild scenarios, even when trained on fewer than 1,000 videos. Project page: https://houyuanchen111.github.io/UniVidX.github.io/",
      "github_url": "https://github.com/houyuanchen111/UniVidX",
      "org_tag": null,
      "dimension": "multimodal",
      "lede": "一个模型搞定多种视频任务",
      "tech_core": "一个模型搞定多种视频生成任务——把「输入什么、输出什么」当成可以随机切换的角色：训练时随机遮一部分让模型学着补，推理时你想要 RGB 出 RGB、想要法线图出法线图。",
      "value": "工业视频管线常常需要 RGB+深度+法线+材质多种图层，过去要几个专模型；UniVidX 一个搞定，1000 条训练数据就能出活。给影视/游戏/AR 资产生成省下大量集成成本。",
      "pm_suggestion": "做 3D/影视工具链的，关注跟进——本季可以先用它替换团队里多个老式 image-to-X 模型；做 AR/虚拟试穿的可以考虑把它当 backbone。"
    },
    {
      "id": 9,
      "title": "HERMES++: Toward a Unified Driving World Model for 3D Scene Understanding and Generation",
      "url": "https://huggingface.co/papers/2604.28196",
      "likes": 69,
      "date": "2026-05-10",
      "published_date": "Apr 30",
      "abstract": "Drivingworld modelsserve as a pivotal technology for autonomous driving by simulating environmental dynamics. However, existing approaches predominantly focus on future scene generation, often overlooking comprehensive3D scene understanding. Conversely, whileLarge Language Models(LLMs) demonstrate impressive reasoning capabilities, they lack the capacity to predict future geometric evolution, creating a significant disparity between semantic interpretation and physical simulation. To bridge this gap, we propose HERMES++, a unified driving world model that integrates3D scene understandingandfuture geometry predictionwithin a single framework. Our approach addresses the distinct requirements of these tasks through synergistic designs. First, aBEV representationconsolidates multi-view spatial information into a structure compatible with LLMs. Second, we introduceLLM-enhanced world queriesto facilitate knowledge transfer from the understanding branch. Third, aCurrent-to-Future Linkis designed to bridge the temporal gap, conditioning geometric evolution on semantic context. Finally, to enforce structural integrity, we employ aJoint Geometric Optimizationstrategy that integrates explicitgeometric constraintswith implicitlatent regularizationto align internal representations with geometry-aware priors. Extensive evaluations on multiple benchmarks validate the effectiveness of our method. HERMES++ achieves strong performance, outperforming specialist approaches in both future point cloud prediction and3D scene understandingtasks. The model and code will be publicly released at https://github.com/H-EmbodVis/HERMESV2.",
      "github_url": "https://github.com/H-EmbodVis/HERMESV2",
      "org_tag": "H-EmbodVis",
      "dimension": "robotics",
      "lede": "自动驾驶世界模型理解+预测",
      "tech_core": "自动驾驶的「世界模型」升级版——既能看懂当前 3D 场景里有什么，又能预测下一秒物体怎么动；用 BEV 鸟瞰图做统一表示，再用 LLM 增强语义，让理解和预测互相促进。",
      "value": "现在的自动驾驶世界模型要么只会预测画面、要么只会理解场景；HERMES++ 同时做到了，对仿真训练数据生成、安全测试场景构造尤其有用。",
      "pm_suggestion": "做自动驾驶仿真平台或合成数据的，立刻评估当 baseline；做 L4 的车厂关注但不要急着替换车端模型——还属于研究阶段。"
    },
    {
      "id": 10,
      "title": "Beyond Semantic Similarity: Rethinking Retrieval for Agentic Search via Direct Corpus Interaction",
      "url": "https://huggingface.co/papers/2605.05242",
      "likes": 68,
      "date": "2026-05-10",
      "published_date": "May 3",
      "abstract": "Modernretrieval systems, whether lexical or semantic, expose a corpus through a fixed similarity interface that compresses access into a single top-k retrieval step before reasoning. This abstraction is efficient, but foragentic search, it becomes a bottleneck: exact lexical constraints, sparse clue conjunctions, local context checks, and multi-step hypothesis refinement are difficult to implement by calling a conventional off-the-shelf retriever, and evidence filtered out early cannot be recovered by stronger downstream reasoning. Agentic tasks further exacerbate this limitation because they require agents to orchestrate multiple steps, including discovering intermediate entities, combining weak clues, and revising the plan after observing partial evidence. To tackle the limitation, we studydirect corpus interaction(DCI), where an agent searches the raw corpus directly with general-purposeterminal tools(e.g., grep, file reads, shell commands, lightweight scripts), without any embedding model, vector index, or retrieval API. This approach requires no offline indexing and adapts naturally to evolving local corpora. AcrossIR benchmarksand end-to-endagentic searchtasks, this simple setup substantially outperforms strong sparse, dense, andrerankingbaselines on several BRIGHT andBEIR datasets, and attains strong accuracy onBrowseComp-Plusandmulti-hop QAwithout relying on any conventional semantic retriever. Our results indicate that as language agents become stronger, retrieval quality depends not only on reasoning ability but also on the resolution of the interface through which the model interacts with the corpus, with which DCI opens a broader interface-design space foragentic search.",
      "github_url": "https://github.com/DCI-Agent/DCI-Agent-Lite",
      "org_tag": "TIGER-Lab",
      "dimension": "action",
      "lede": "扔掉向量库，让 Agent 用 grep",
      "tech_core": "扔掉向量数据库，让 Agent 直接用 grep、cat、shell 在原始文档里翻——结果比传统语义检索还准，因为 Agent 能动态组合精确条件、回头补查、迭代修正。",
      "value": "颠覆性结论：当 Agent 足够强时，「检索接口的分辨率」比「向量相似度」更重要。对企业本地知识库尤其有意义——不用建索引、文档随便加，能省一大笔向量库成本。",
      "pm_suggestion": "立刻试验：在你的 RAG 项目里加一条「terminal tool 旁路」，让 Agent 自己决定走 grep 还是走向量。可能 50% 场景能直接砍掉向量服务的费用。这是今年最值得复现的工程结论之一。"
    },
    {
      "id": 11,
      "title": "Skill1: Unified Evolution of Skill-Augmented Agents via Reinforcement Learning",
      "url": "https://huggingface.co/papers/2605.06130",
      "likes": 61,
      "date": "2026-05-10",
      "published_date": "May 7",
      "abstract": "A persistentskill libraryallows language model agents to reuse successful strategies across tasks. Maintaining such a library requires three coupled capabilities. The agent selects a relevant skill, utilizes it during execution, and distills new skills from experience. Existing methods optimize these capabilities in isolation or with separate reward sources, resulting in partial and conflicting evolution. We propose Skill1, a framework that trains a single policy to co-evolveskill selection, utilization, and distillation toward a sharedtask-outcome objective. The policy generates a query to search theskill library, re-ranks candidates to select one, solves the task conditioned on it, and distills a new skill from the trajectory. All learning derives from a single task-outcome signal. Its low-frequency trend credits selection and its high-frequency variation credits distillation. Experiments onALFWorldandWebShopshow that Skill1 outperforms prior skill-based andreinforcement learningbaselines. Training dynamics confirm the co-evolution of the three capabilities, and ablations show that removing any credit signal degrades the evolution.",
      "github_url": null,
      "org_tag": null,
      "dimension": "action",
      "lede": "Agent 技能库的端到端进化",
      "tech_core": "让 Agent 的技能库会自己进化——以前「找技能、用技能、攒技能」是三件分开优化的事，现在用一个统一的 RL 信号一起训：低频信号告诉它怎么选，高频信号告诉它怎么提炼新技能。",
      "value": "做长期运行的 Agent（持续工作的客服、运维、研究助手）必须有可成长的 skill 库，这篇给出了端到端方案。在 ALFWorld 和 WebShop 上稳定超过既有方案。",
      "pm_suggestion": "如果你在做「越用越聪明」的 Agent 产品（Devin、Cursor 类），立刻参考其单信号训练框架；不做长期 Agent 可以暂缓。"
    },
    {
      "id": 12,
      "title": "OpenSeeker-v2: Pushing the Limits of Search Agents with Informative and High-Difficulty Trajectories",
      "url": "https://huggingface.co/papers/2605.04036",
      "likes": 61,
      "date": "2026-05-10",
      "published_date": "May 5",
      "abstract": "Deep search capabilities have become an indispensable competency for frontierLarge Language Model(LLM) agents, yet their development remains dominated by industrial giants. The typical industry recipe involves a highly resource-intensive pipeline spanning pre-training,continual pre-training(CPT),supervised fine-tuning(SFT), andreinforcement learning(RL). In this report, we show that when fueled with informative and high-difficulty trajectories, a simple SFT approach could be surprisingly powerful for training frontier search agents. By introducing three simple data synthesis modifications: scalingknowledge graphsize for richer exploration, expanding thetool setsize for broader functionality, and strict low-step filtering, we establish a stronger baseline. Trained on merely 10.6k data points, our OpenSeeker-v2 achieves state-of-the-art performance across 4 benchmarks (30B-sized agents withReAct paradigm): 46.0% onBrowseComp, 58.1% onBrowseComp-ZH, 34.6% onHumanity's Last Exam, and 78.0% onxbench, surpassing even Tongyi DeepResearch trained with heavy CPT+SFT+RL pipeline, which achieves 43.4%, 46.7%, 32.9%, and 75.0%, respectively. Notably, OpenSeeker-v2 represents the first state-of-the-art search agent within its model scale and paradigm to be developed by a purely academic team using only SFT. We are excited to open-source the OpenSeeker-v2 model weights and share our simple yet effective findings to make frontier search agent research more accessible to the community.",
      "github_url": "https://github.com/PolarSeeker/OpenSeeker",
      "org_tag": null,
      "dimension": "action",
      "lede": "1 万条数据训出 SOTA 搜索 Agent",
      "tech_core": "用学术团队的小数据集（1.06 万条）训出 SOTA 搜索 Agent——证明了搜索 Agent 不一定要工业级 CPT+SFT+RL 全套流水线，关键在于「构造高难度但有营养的训练轨迹」。",
      "value": "小团队也能造出对标 Tongyi DeepResearch 的搜索 Agent。给学术界、独立开发者一个能复现的 SOTA 配方，权重和数据全开源。",
      "pm_suggestion": "做 deep research / Perplexity 类产品的独立开发者立刻 fork 当起点；不需要再向大厂模型 API 付费做基础能力。商业化机会在垂直领域微调。"
    },
    {
      "id": 13,
      "title": "MiniCPM-o 4.5: Towards Real-Time Full-Duplex Omni-Modal Interaction",
      "url": "https://huggingface.co/papers/2604.27393",
      "likes": 56,
      "date": "2026-05-10",
      "published_date": "Apr 30",
      "abstract": "Recent progress inmultimodal large language models(MLLMs) has brought AI capabilities from static offline data processing toreal-time streaming interaction, yet they still remain far from human-level multimodal interaction. The key bottlenecks are no longer modality coverage or latency alone, but the interaction paradigm itself. First, perception and response are still separated into alternating phases, preventing models from incorporating new inputs for timely adjustment during generation. Second, most current models remain reactive, responding only to explicit user requests instead of acting proactively in the evolving multimodal environment. We present MiniCPM-o 4.5, our latest effort towards human-like multimodal interaction, which mitigates these gaps by real-time full-duplexomni-modal interaction. It can see, listen, and speak simultaneously in real-time, while also exhibiting proactive behaviors such as issuing reminders or comments based on its continuous understanding of the live scene. The key technique behind MiniCPM-o 4.5 isOmni-Flow, a unified streaming framework that aligns omni-modal inputs and outputs along a sharedtemporal axis. This formulation converts conventionalturn-based interactioninto a full-duplex, time-aligned process, enabling simultaneous perception and response and allowing proactive behavior to arise within the same framework. With a total of 9B parameters, MiniCPM-o 4.5 approaches Gemini 2.5 Flash invision-language capabilities, delivering state-of-the-art open-source performance at its scale. It also surpasses Qwen3-Omni-30B-A3B inomni-modal understandingand delivers betterspeech generation, with significantly higher computation efficiency. Driven by its efficient architecture design and inference optimization, the model can perform real-time full-duplexomni-modal interactiononedge deviceswith less than 12GB RAM cost.",
      "github_url": "https://github.com/OpenBMB/MiniCPM-o",
      "org_tag": "OpenBMB",
      "dimension": "multimodal",
      "lede": "9B 端侧实时全双工多模态",
      "tech_core": "端侧实时全双工多模态——可以一边听一边看一边说，不用等用户说完再回应，还能主动开口提醒、评论。9B 参数、12GB 内存就能跑。",
      "value": "过去要做实时多模态 Agent（直播助手、车载 AI、家庭机器人嘴）只能挂云端 GPT-4o。MiniCPM-o 4.5 把它压到普通笔记本和手机能跑，本地端侧 AI 体验真正可用。",
      "pm_suggestion": "做 AI 玩具、车载语音、智能眼镜的团队立刻把它当首选端侧模型评估；做云端语音的也要警惕——端侧能力变强会冲击你的一部分场景。"
    },
    {
      "id": 14,
      "title": "Continuous Latent Diffusion Language Model",
      "url": "https://huggingface.co/papers/2605.06548",
      "likes": 54,
      "date": "2026-05-10",
      "published_date": "May 7",
      "abstract": "Large language models have achieved remarkable success under theautoregressive paradigm, yet high-qualitytext generationneed not be tied to a fixed left-to-right order. Existing alternatives still struggle to jointly achieve generation efficiency, scalable representation learning, and effective global semantic modeling. We propose Cola DLM, ahierarchical latent diffusion language modelthat framestext generationthrough hierarchical information decomposition. Cola DLM first learns a stabletext-to-latent mappingwith aText VAE, then models aglobal semantic priorincontinuous latent spacewith ablock-causal DiT, and finally generates text throughconditional decoding. From a unifiedMarkov-path perspective, its diffusion process performslatent prior transportrather than token-level observation recovery, thereby separating global semantic organization from local textual realization. This design yields a more flexiblenon-autoregressive inductive bias, supports semantic compression and prior fitting in continuous space, and naturally extends to other continuous modalities. Through experiments spanning 4 research questions, 8 benchmarks, strictly matched ~2B-parameter autoregressive and LLaDA baselines, and scaling curves up to about 2000 EFLOPs, we identify an effective overall configuration of Cola DLM and verify its strongscaling behaviorfortext generation. Taken together, the results establish hierarchical continuous latent prior modeling as a principled alternative to strictly token-level language modeling, where generation quality andscaling behaviormay better reflect model capability thanlikelihood, while also suggesting a concrete path towardunified modelingacross discrete text and continuous modalities.",
      "github_url": null,
      "org_tag": null,
      "dimension": "understanding",
      "lede": "扩散模型挑战自回归生成",
      "tech_core": "一个尝试替代「自回归一个个吐 token」的新范式——先把文本压成连续向量、在向量空间里用扩散模型生成全局语义、再解码成文字。和 LLaDA 等同等规模，能 scale 到 2000 EFLOPs。",
      "value": "目前还偏研究，但是给「下一代语言模型架构」打开一条路：不再左到右、可同时建模文本和连续模态（图像、音频）。如果跑通，统一多模态生成会更优雅。",
      "pm_suggestion": "非研究团队不用急——观察 6-12 个月看是否进入工业可用规模；做 LLM 基础架构研究的实验室必读。"
    },
    {
      "id": 15,
      "title": "MiA-Signature: Approximating Global Activation for Long-Context Understanding",
      "url": "https://huggingface.co/papers/2605.06416",
      "likes": 47,
      "date": "2026-05-10",
      "published_date": "May 7",
      "abstract": "A growing body of work in cognitive science suggests that reportable conscious access is associated with global ignition over distributed memory systems, while such activation is only partially accessible as individuals cannot directly access or enumerate all activated contents. This tension suggests a plausible mechanism that cognition may rely on a compact representation that approximates the global influence of activation on downstream processing. Inspired by this idea, we introduce the concept ofMindscape Activation Signature(MiA-Signature), a compressed representation of the global activation pattern induced by a query. In LLM systems, this is instantiated viasubmodular-based selectionofhigh-level conceptsthat cover the activated context space, optionally refined through lightweight iterative updates usingworking memory. The resulting MiA-Signature serves as a conditioning signal that approximates the effect of the full activation state while remaining computationally tractable. Integrating MiA-Signatures into bothRAGandagentic systemsyields consistent performance gains across multiplelong-context understandingtasks.",
      "github_url": null,
      "org_tag": "Tencent",
      "dimension": "understanding",
      "lede": "长上下文的概念签名机制",
      "tech_core": "长上下文的「记忆指纹」——不再尝试把所有 token 都注意一遍，而是先抽出一组高级概念当做这次问题的「激活签名」，用它去引导后续生成。",
      "value": "长文档 QA、智能体长期记忆是刚需痛点。MiA-Signature 在 RAG 和 Agent 系统上都涨点，并且是即插即用的轻量模块，不用改主模型。",
      "pm_suggestion": "做企业知识助手、长会议总结、Agent 长期记忆的，立刻评估这种「概念签名」机制——比死塞 token 进上下文便宜得多。"
    },
    {
      "id": 16,
      "title": "Beyond SFT-to-RL: Pre-alignment via Black-Box On-Policy Distillation for Multimodal RL",
      "url": "https://huggingface.co/papers/2604.28123",
      "likes": 42,
      "date": "2026-05-10",
      "published_date": "May 1",
      "abstract": "The standard post-training recipe for large multimodal models (LMMs) appliessupervised fine-tuning(SFT) on curated demonstrations followed byreinforcement learning with verifiable rewards(RLVR). However, SFT introducesdistributional driftthat neither preserves the model's original capabilities nor faithfully matches the supervision distribution. This problem is further amplified inmultimodal reasoning, where perception errors and reasoning failures follow distinct drift patterns that compound during subsequent RL. We introduce PRISM, a three-stage pipeline that mitigates this drift by inserting an explicit distribution-alignment stage between SFT and RLVR. Building on the principle ofon-policy distillation(OPD), PRISM casts alignment as a black-box,response-level adversarial gamebetween thepolicyand aMixture-of-Experts(MoE) discriminator with dedicated perception and reasoning experts, providing disentangled corrective signals that steer thepolicytoward the supervision distribution without requiring access to teacher logits. While 1.26M public demonstrations suffice for broad SFT initialization, distribution alignment demands higher-fidelity supervision; we therefore curate 113K additional demonstrations from Gemini 3 Flash, featuring densevisual groundingandstep-by-step reasoningon the hardest unsolved problems. Experiments on Qwen3-VL show that PRISM consistently improves downstream RLVR performance across multiple RL algorithms (GRPO, DAPO, GSPO) and diverse multimodal benchmarks, improving average accuracy by +4.4 and +6.0 points over the SFT-to-RLVR baseline on 4B and 8B, respectively. Our code, data, and model checkpoints are publicly available at https://github.com/XIAO4579/PRISM.",
      "github_url": "https://github.com/XIAO4579/PRISM",
      "org_tag": "HKUSTGZ",
      "dimension": "safety",
      "lede": "多模态 RL 的稳态对齐层",
      "tech_core": "在 SFT 和 RL 中间插一个「对齐课」——用一个混合专家判别器（一个看感知、一个看推理）当对手，把策略拉回真实分布，避免 SFT 之后偏出去导致 RL 阶段越训越歪。",
      "value": "多模态后训练的隐性痛点：感知错误和推理错误会在 RL 阶段相互放大。PRISM 给 RLVR 加了一个工程化稳态层，平均提升 +4.4 到 +6.0 分。",
      "pm_suggestion": "做多模态模型微调服务（B 端定制大模型）的团队立刻把这套三段流程加进产品；做应用层不太需要碰。"
    },
    {
      "id": 17,
      "title": "RaguTeam at SemEval-2026 Task 8: Meno and Friends in a Judge-Orchestrated LLM Ensemble for Faithful Multi-Turn Response Generation",
      "url": "https://huggingface.co/papers/2605.04523",
      "likes": 37,
      "date": "2026-05-10",
      "published_date": "May 6",
      "abstract": "We present our winning system for Task~B (generation with reference passages) in SemEval-2026 Task~8: MTRAGEval. Our method is aheterogeneous ensembleof seven LLMs with twoprompting variants, where aGPT-4o-minijudge selects the best candidate per instance. We ranked 1st out of 26 teams, achieving aconditioned harmonic meanof 0.7827 and outperforming the strongest baseline (gpt-oss-120b, 0.6390). Ablations show that diversity in model families, scales, and prompting strategies is essential, with the ensemble consistently beating any single model. We also introduce Meno-Lite-0.1, a 7Bdomain-adapted modelwith a strongcost--performance trade-off, and analyse MTRAGEval, highlighting annotation limitations and directions for improvement. Our code is publicly available: https://github.com/RaguTeam/ragu_mtrag_semeval",
      "github_url": "https://github.com/RaguTeam/ragu_mtrag_semeval",
      "org_tag": "Novosibirsk State University",
      "dimension": "action",
      "lede": "七模型组队 + GPT 当裁判",
      "tech_core": "七个不同 LLM 组队答题，再用 GPT-4o-mini 当裁判挑最优答案——异质集成 + 判官路由，在多轮 RAG 任务上拿到 SemEval 第一。",
      "value": "工程结论清晰：模型多样性 > 单模型规模，对生成式答题任务尤其明显。给做企业问答、知识助手的团队一个简单可落地的提质方案。",
      "pm_suggestion": "如果你的客服/答题产品已经在用单模型 + RAG，立刻试试这种「多模型+判官」架构；成本上去了，但准确率提升直观，B 端客户愿意买单。"
    },
    {
      "id": 18,
      "title": "Web2BigTable: A Bi-Level Multi-Agent LLM System for Internet-Scale Information Search and Extraction",
      "url": "https://huggingface.co/papers/2604.27221",
      "likes": 37,
      "date": "2026-05-10",
      "published_date": "Apr 29",
      "abstract": "Agentic web search increasingly faces two distinct demands: deep reasoning over a single target, and structured aggregation across many entities and heterogeneous sources. Current systems struggle on both fronts. Breadth-oriented tasks demand schema-aligned outputs with wide coverage and cross-entity consistency, while depth-oriented tasks require coherent reasoning over long, branching search trajectories. We introduce Web2BigTable, amulti-agent frameworkfor web-to-table search that supports both regimes. Web2BigTable adopts abi-level architecturein which an upper-level orchestrator decomposes the task into sub-problems and lower-level worker agents solve them in parallel. Through aclosed-loop run--verify--reflect process, the framework jointly improves decomposition and execution over time via persistent, human-readableexternal memory, with self-evolving updates to each single-agent. During execution, workers coordinate through ashared workspacethat makes partial findings visible, allowing them to reduce redundant exploration, reconcile conflicting evidence, and adapt to emerging coverage gaps. Web2BigTable sets a new state of the art on WideSearch, reaching an Avg@4 Success Rate of 38.50 (7.5times the second best at 5.10), Row F1 of 63.53 (+25.03 over the second best), and Item F1 of 80.12 (+14.42 over the second best). It also generalises to depth-oriented search on XBench-DeepSearch, achieving 73.0 accuracy. Code is available at https://github.com/web2bigtable/web2bigtable.",
      "github_url": "https://github.com/web2bigtable/web2bigtable",
      "org_tag": null,
      "dimension": "action",
      "lede": "AI 调研员一次出整张大宽表",
      "tech_core": "让 Agent 能从全网搜出大宽表——上层 Agent 拆任务，下层一群 worker 并行搜，再通过共享白板互相看到对方进展、避免重复劳动；任务做完用 run-verify-reflect 闭环不断改进。",
      "value": "调研、行业图谱、竞品矩阵这种「找 100 家公司每家 10 项数据」的需求，过去得靠人力外包。Web2BigTable 在 WideSearch 上 7.5 倍领先第二名，意味着 RPA + 调研外包业务直接被冲。",
      "pm_suggestion": "做行业研究、SaaS 销售线索、市场调研工具的，立刻把这套架构集成；商业化机会很大，可以做成「AI 调研员」按表收费。"
    },
    {
      "id": 19,
      "title": "When to Trust Imagination: Adaptive Action Execution for World Action Models",
      "url": "https://huggingface.co/papers/2605.06222",
      "likes": 36,
      "date": "2026-05-10",
      "published_date": "May 7",
      "abstract": "WorldActionModels(WAMs)haverecentlyemergedasapromisingparadigmforroboticmanipulationbyjointlypredictingfuturevisualobservationsandfutureactions.However,currentWAMstypicallyexecuteafixednumberofpredictedactionsaftereachmodelinference,leavingtherobotblindtowhethertheimaginedfutureremainsconsistentwiththeactualphysicalrollout.Inthiswork,weformulateadaptiveWAMexecutionasafuture-realityverificationproblem:therobotshouldexecutelongerwhentheWAM-predictedfutureremainsreliable,andreplanearlierwhenrealitydeviatesfromimagination.Tothisend,weproposeFutureForwardDynamicsCausalAttention(FFDC),alightweightverifierthatjointlyreasonsoverpredictedfutureactions,predictedvisualdynamics,realobservations,andlanguageinstructionstoestimatewhethertheremainingactionrolloutcanstillbetrusted.FFDCenablesadaptiveactionchunksizesasanemergentconsequenceofprediction-observationconsistency,preservingtheefficiencyoflong-horizonexecutionwhilerestoringresponsivenessincontact-richordifficultphases.WefurtherintroduceMixture-of-HorizonTrainingtoimprovelong-horizontrajectorycoverageforadaptiveexecution.ExperimentsontheRoboTwinbenchmarkandintherealworlddemonstratethatourmethodachievesastrongrobustness-efficiencytrade-off:onRoboTwin,itreducesWAMforwardpassesby69.10%andexecutiontimeby34.02%,whileimprovingsuccessrateby2.54%overtheshort-chunkbaseline;inreal-worldexperiments,itimprovessuccessrateby35%.",
      "github_url": null,
      "org_tag": null,
      "dimension": "robotics",
      "lede": "机器人自我怀疑省 69% 算力",
      "tech_core": "机器人「自我怀疑」机制——预测的未来和真实观察一致时多走几步，不一致时立刻停下重规划，省 69% 前向计算同时还涨成功率 35%。",
      "value": "实际机器人部署的核心矛盾是「想跑得快又不能跑歪」。FFDC 把这件事做到了通用层面，对家庭机器人、移动机器人尤其重要——续航和安全都靠它。",
      "pm_suggestion": "做机器人产品的团队立刻把它当 WAM 类策略的标配；这种「自检验」思路也可以迁移到任何长链路 Agent，能省大笔 token。"
    },
    {
      "id": 20,
      "title": "MARBLE: Multi-Aspect Reward Balance for Diffusion RL",
      "url": "https://huggingface.co/papers/2605.06507",
      "likes": 34,
      "date": "2026-05-10",
      "published_date": "May 7",
      "abstract": "Reinforcement learning fine-tuninghas become the dominant approach for aligningdiffusion modelswith human preferences. However, assessing images is intrinsically amulti-dimensional task, and multiple evaluation criteria need to be optimized simultaneously. Existing practice deal with multiple rewards by training one specialist model per reward, optimizing aweighted-sum rewardR(x)=sum_k w_k R_k(x), or sequentially fine-tuning with a hand-crafted stage schedule. These approaches either fail to produce a unified model that can be jointly trained on all rewards or necessitates heavy manually tuned sequential training. We find that the failure stems from using a naiveweighted-sum rewardaggregation. This approach suffers from a sample-level mismatch because most rollouts are specialist samples, highly informative for certain reward dimensions but irrelevant for others; consequently, weighted summation dilutes their supervision. To address this issue, we propose MARBLE (Multi-Aspect Reward BaLancE), agradient-space optimizationframework that maintains independent advantage estimators for each reward, computes per-rewardpolicy gradients, and harmonizes them into a single update direction without manually-tuned reward weighting, by solving aQuadratic Programmingproblem. We further propose anamortized formulationthat exploits the affine structure of the loss used in DiffusionNFT, to reduce the per-step cost from K+1 backward passes to near single-reward baseline cost, together withEMA smoothingon the balancing coefficients to stabilize updates against transient single-batch fluctuations. On SD3.5 Medium with five rewards, MARBLE improves all five reward dimensions simultaneously, turns the worst-aligned reward's gradient cosine from negative under weighted summation in 80% of mini-batches to consistently positive, and runs at 0.97X the training speed of baseline training.",
      "github_url": "https://github.com/aim-uofa/MARBLE",
      "org_tag": "Zhejiang University",
      "dimension": "safety",
      "lede": "扩散模型 RL 的多目标平衡器",
      "tech_core": "扩散模型 RL 微调时的「多目标平衡器」——不再死给每个奖励配权重，而是把每个奖励的梯度方向凑到一起算最优合力，避免「学了 A 维度就毁了 B 维度」。",
      "value": "图像生成的对齐总是按下葫芦浮起瓢——美感涨了文本对齐崩，文本对齐好了构图烂。MARBLE 让五个维度同时涨，对所有要做生成模型对齐的团队都有用。",
      "pm_suggestion": "做图像/视频生成 SaaS、AI 头像、商品图工具的团队立刻替换掉 weighted-sum 训练；这是 2026 年生成模型对齐的工程标配。"
    }
  ],
  "opportunities": {
    "strategies": [
      {
        "type": "cashcow",
        "title": "AI 调研员 SaaS",
        "papers": [
          18,
          17,
          7
        ],
        "insight": "Web2BigTable + 多模型组队 + OpenSearch-VL 三篇合起来已经把「自动出整张行业大宽表」做到 7.5 倍领先。把它包成「按表收费的 AI 调研员」，目标客户是中小咨询公司、SaaS 销售线索团队、独立分析师。",
        "action": "立刻 fork Web2BigTable 当骨架，套上多模型判官路由，用 OpenSearch-VL 做 fallback 搜索。第一版 MVP 2 周内可上。"
      },
      {
        "type": "efficiency",
        "title": "干掉向量数据库",
        "papers": [
          10,
          15,
          19
        ],
        "insight": "本周三篇都在唱反调：Agent 用 grep 比向量库强、长上下文用「概念签名」就够、机器人不需要每步都重算。共同信号——当模型够强时，「重检索 + 重计算」反而是工程债。",
        "action": "在自家 RAG 项目加一条 terminal grep 旁路 + 长上下文激活签名两个开关，A/B 测一周，可能能砍 30-50% 向量服务费。"
      },
      {
        "type": "blueocean",
        "title": "国产端侧多模态玩具/穿戴",
        "papers": [
          13,
          1,
          4
        ],
        "insight": "MiniCPM-o 4.5 让 9B 全双工多模态在手机上跑，MolmoAct2 + RLDX-1 让具身 VLA 开源到能用。两条线交汇 → 端侧机器人/玩具/智能眼镜终于有了能落地的开源底座，且不依赖云端 API。",
        "action": "做 AI 玩具/儿童陪伴/老人辅助的团队立刻评估这套组合；做云端语音助手的要警惕，端侧能力变强会冲击你 30% 的低频场景。"
      },
      {
        "type": "special",
        "title": "生成模型对齐工程化",
        "papers": [
          20,
          16,
          6,
          3
        ],
        "insight": "本周四篇都在解决同一个底层问题：生成模型微调时「按下葫芦浮起瓢」。MARBLE 的多目标梯度合力、PRISM 的稳态层、视频考前刷题、Stream-R1 的精准蒸馏，合起来基本就是 2026 年生成模型对齐的工程标配。",
        "action": "做图像/视频生成 SaaS 的团队把这四个组件按「微调三段式」组装：SFT → PRISM 稳态 → MARBLE 多目标 RL → 推理时刷题。可申请技术专利。"
      }
    ],
    "newProducts": [
      {
        "name": "AI 调研员（按表收费）",
        "papers": [
          18,
          7
        ],
        "pitch": "你给关键词，我给整张行业大宽表（公司/产品/融资/技术栈/客户案例）。每张表 ¥99-¥999。",
        "moat": "Web2BigTable 的并行 + 反思机制 + 私域知识微调，是普通 RPA 工具做不到的深度调研。",
        "audience": "中小咨询、独立分析师、SaaS 销售线索团队、VC 实习生。"
      },
      {
        "name": "DeepSeek 端侧编程助手（中文版）",
        "papers": [
          13,
          12
        ],
        "pitch": "把 MiniCPM-o + 小数据训练的搜索 Agent 组合成本地编程助手，国内合规、离线可用、月费 ¥30。",
        "moat": "对标 Cursor，但全本地 + 中文优先 + 不出境，主打 toB 内网开发场景。",
        "audience": "国内中大型企业内网研发、政企开发者、合规要求高的金融/医疗。"
      },
      {
        "name": "AI 短剧工厂（一键出片）",
        "papers": [
          3,
          6,
          8
        ],
        "pitch": "一句话生成 30 秒短剧，自动出 RGB+深度+材质多图层，画质连贯、镜头稳定。",
        "moat": "Stream-R1 + UniVidX + 视频考前刷题三层组合，比单纯调 Sora API 便宜 5 倍且可商用。",
        "audience": "内容工作室、短视频 MCN、广告代理、独立创作者。"
      },
      {
        "name": "可成长的 Agent 平台",
        "papers": [
          11,
          2,
          5
        ],
        "pitch": "用得越多、技能越强的企业 Agent 平台。每个员工的 Agent 会自动从工作日志里抽出新 skill 入库。",
        "moat": "三篇关键论文给出了「自学自考 + 端到端 RL + 双盲审稿」的可成长闭环，是当前所有 Agent SaaS 都还没做到的。",
        "audience": "中大型企业的 IT/客服/法务/财务部门，按席位收费。"
      }
    ]
  }
};
