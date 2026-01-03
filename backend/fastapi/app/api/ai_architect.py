from fastapi import HTTPException,APIRouter
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate

from app.core.config import settings
from app.schemas.ai_schemas import ChatRequest,WorkflowDefinition
from app.templates.prompt import AVAILABLE_TOOLS,systemprompt

router=APIRouter()

@router.post("/generate")
async def generate_workflow_structure (request: ChatRequest):
    try:
        if not settings.GROQ_API_KEY:
            raise HTTPException(status_code=500,detail="GROQ_API_KEY is missing")
        
        llm=ChatGroq(
            api_key=settings.GROQ_API_KEY,
            model="openai/gpt-oss-120b",
            temperature=0
        )
        structured_llm=llm.with_structured_output(WorkflowDefinition)

        final_system_message=systemprompt.format(tools_list=AVAILABLE_TOOLS)
        prompt=ChatPromptTemplate.from_messages(
            [
                ("system",final_system_message),
                ("human","{input}")
            ]
        )

        chain=prompt|structured_llm
        result=await chain.ainvoke({"input":request.message})

        return result.dict()
    except Exception as e:
        
        print(f"ERROR: {str(e)}")
        raise HTTPException(status_code=500,detail=str(e))