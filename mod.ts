// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolCallResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolCallResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const fin_get_quoteTool: Tool = {
  definition: {
    name: 'fin_get_quote',
    description: 'Get real-time or historical quote',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[financial-data] fin_get_quote executed');
      return ok('fin_get_quote', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'fin_get_quote',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const fin_screen_stocksTool: Tool = {
  definition: {
    name: 'fin_screen_stocks',
    description: 'Screen stocks by criteria',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[financial-data] fin_screen_stocks executed');
      return ok('fin_screen_stocks', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'fin_screen_stocks',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const fin_technical_indicatorsTool: Tool = {
  definition: {
    name: 'fin_technical_indicators',
    description: 'Calculate technical indicators',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[financial-data] fin_technical_indicators executed');
      return ok('fin_technical_indicators', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'fin_technical_indicators',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const fin_portfolio_reportTool: Tool = {
  definition: {
    name: 'fin_portfolio_report',
    description: 'Generate portfolio performance report',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[financial-data] fin_portfolio_report executed');
      return ok('fin_portfolio_report', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'fin_portfolio_report',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-financial-data] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-financial-data] Unloading...');
}
export const tools: Tool[] = [
  fin_get_quoteTool,
  fin_screen_stocksTool,
  fin_technical_indicatorsTool,
  fin_portfolio_reportTool,
];
